
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';
import SectionTitle from '../../../components/SectionTitle';
import { UploadImage } from '../../../components/UploadImage';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useEffect, useState } from 'react';
import { TfiReload } from "react-icons/tfi";
import Swal  from 'sweetalert2';

const AddItems =  () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const axiosSecure = useAxiosSecure();
    const [loading, setLoading] = useState(true);

    const [localImage, setLocalImage] = useState(null)
    const [uploadedUrl, setUploadedUrl] = useState(null)
    
    


    const onSubmit = async (data) => {
        const {image, ...rest} = data;
        const addItemData = { ...rest, image: uploadedUrl}
        console.log(addItemData)

        const res = await axiosSecure.post('/add-items', addItemData)

        console.log(res.data)
        
        if(res.data){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Successfully inserted Items",
                showConfirmButton: false,
                timer: 1500
              });
            reset()
            setUploadedUrl(null)

        }


    }


    
// name
// "Breton Fish Stew"
// recipe
// "Chargrilled chicken with avocado, baby gem lettuce, baby spinach, shal…"
// image
// "https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-8-…"
// category
// "pizza"
// price
// 12.9


    useEffect(() => {
        const imageLoader = async() => {
            if(localImage){
                setUploadedUrl(null)
                const res = await UploadImage(localImage)

                setUploadedUrl(res)
                setLoading(false)

                setLocalImage(null)
            }
        }

        imageLoader()
    },[localImage])

    console.log(localImage)
    return (

        <div className='my-10 p-5'>
            <SectionTitle mainTitle="ADD AN ITEM" subTitle="What's new?"></SectionTitle>
            <div className="bg-gray-100 p-10 rounded-lg max-w-7xl mt-10 mx-auto ">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                    {/* Recipe Name */}
                    <div className='space-y-3'>
                        <label className="label font-semibold">Recipe name*</label>
                        <input
                            type="text"
                            placeholder="Recipe name"
                            className="input input-bordered w-full bg-light"
                            {...register("name", { required: "Recipe name is required" })}
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>

                    {/* Category & Price */}
                    <div className="flex gap-4">
                        {/* Category */}
                        <div className="flex-1 space-y-3">
                            <label className="label font-semibold">Category*</label>
                            <select
                                className="select select-bordered w-full bg-light "
                                {...register("category", { required: "Category is required" })}
                            >
                                <option value="">Category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soups">Soups</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                            {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
                        </div>

                        {/* Price */}
                        <div className="flex-1 space-y-3">
                            <label className="label font-semibold">Price*</label>
                            <input
                                type="number"
                                step="0.01"
                                placeholder="Price"
                                className="input input-bordered w-full bg-light"
                                {...register("price", { required: "Price is required" })}
                            />
                            {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
                        </div>
                    </div>

                    {/* Recipe Details */}
                    <div className='space-y-3'>
                        <label className="label font-semibold">Recipe Details*</label>
                        <textarea
                            className="textarea textarea-bordered w-full bg-light"
                            placeholder="Recipe Details"
                            {...register("recipe", { required: "Details are required" })}
                        ></textarea>
                        {errors.details && <p className="text-red-500 text-sm">{errors.details.message}</p>}
                    </div>

                    {/* File Upload */}
                    <div className='flex flex-col gap-4'>
                        <input onChange={ (e) => setLocalImage(e.target.files[0]) } type="file" accept="image/*" className="file-input file-input-md" />
                        {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
                        {
                            uploadedUrl ?  <img src={`${uploadedUrl}`} className='h-20 w-20' /> : ''
                        }
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn bg-dashboard-bg text-white hover:bg-yellow-800">
                        Add Item <FaUtensils /> { localImage ? <TfiReload className='animate-spin text-light text-xl' /> : ''}
                    </button>
                    
                </form>
            </div>
        </div>
    );
};

export default AddItems;