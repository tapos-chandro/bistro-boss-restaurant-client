import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Loading from './../../../components/Loading';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import SectionTitle from '../../../components/SectionTitle';

const ManageItems = () => {

    const axiosSecure = useAxiosSecure();

    const { data: menu, isLoading, refetch } = useQuery({
        queryKey: ['all-menu'],
        queryFn: async () => {
            const res = await axiosSecure.get('/all-menu')
            return res.data
        }
    })


    const handleUpdata = async (id) => {
        console.log(id, 'update item')

        // const res = 

    }

    const handleDelate = async (id) => {
        try {



            Swal.fire({
                title: "Are you sure?",
                text: "You want to delete it!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(async (result) => {

                if (result.isConfirmed) {
                    const res = await axiosSecure.delete(`/delate-item?id=${id}`)

                    console.log(res)

                    if (res.data?.deletedCount > 0) {

                        refetch()

                        Swal.fire({
                            title: "Deleted Successfully",
                            icon: "success"
                        });
                        
                    }
                }
            });
        } catch (error) {
            console.log(error.massage)
        }
    }



    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mt-20'>
            <SectionTitle subTitle={"Hurry Up"} mainTitle={"Manage all Items"}/>

            <div className="max-w-6xl mx-auto p-5">
                <h2 className="text-2xl font-bold mb-5">Total Items: {menu?.length}</h2>

                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* Table Head */}
                        <thead className="bg-dashboard-bg rounded-xl  text-white">
                            <tr className=''>
                                <th className='rounded-tl-2xl'>#</th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                                <th className='rounded-tr-2xl'>Action</th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody>
                            {menu?.map((item, index) => (
                                <tr key={item._id} >
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="w-12 h-12 bg-gray-300 rounded">
                                            <img src={item?.image} alt={item?.name} srcset="" />
                                        </div>
                                    </td>
                                    <td className="font-semibold">{item.name}</td>
                                    <td>${item.price}</td>
                                    <td>
                                        <button className="btn btn-warning bg-dashboard-bg btn-sm text-white" onClick={() => handleUpdata(item?._id)}>
                                            <FaEdit />
                                        </button>
                                    </td>
                                    <td>
                                        <button className="btn btn-error btn-sm text-white" onClick={() => handleDelate(item?._id)}>
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;