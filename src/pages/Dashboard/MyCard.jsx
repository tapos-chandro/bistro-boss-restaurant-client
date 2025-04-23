import { BiTrash } from "react-icons/bi";
import SectionTitle from "../../components/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useCarts from "../../hooks/useCarts";
import { Link } from "react-router";



const MyCard = () => {
  const axiosSecure = useAxiosSecure()


  const [cartItems, refetch] = useCarts()


  const totalPrice = cartItems?.reduce((acc, item) => acc + item.price, 0);


  const handleDelate = async (id) => {


    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await axiosSecure.delete(`/carts/${id}`, id)
        if (response.data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your cart deleted successfully.",
            icon: "success"
          });
          refetch()
        }

      }
    });
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8 ">
      <SectionTitle subTitle="My cart" mainTitle="My Cart" />
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center  mb-6 gap-4 sm:gap-0 max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold">
          Total Orders: <span className="text-black">{cartItems?.length}</span>
        </h2>
        <div className="flex items-center gap-4">
          <h2 className="text-xl sm:text-2xl font-bold">
            Total Price: <span className="text-black">${totalPrice?.toFixed(1)}</span>
          </h2>
          <Link to="/dashboard/payment"><button className="bg-dashboard-bg text-white px-4 py-2 rounded-md hover:bg-yellow-700 transition">
            Pay
          </button></Link>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-md max-w-6xl mx-auto">
        <table className="min-w-[700px] w-full text-sm sm:text-base">
          <thead>
            <tr className="bg-dashboard-bg text-white text-left">
              <th className="px-4 py-5">QTY</th>
              <th className="px-4 py-5">ITEM IMAGE</th>
              <th className="px-4 py-5">ITEM NAME</th>
              <th className="px-4 py-5">PRICE</th>
              <th className="px-4 py-5">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {cartItems?.map((item, index) => (
              <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-2 font-semibold">{index + 1}</td>
                <td className="px-4 py-2">
                  <div className="w-10 h-10 bg-gray-300 rounded-md">
                    <img src={item?.image} alt="" />
                  </div>
                </td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">${item.price}</td>
                <td className="px-4 py-2">
                  <button onClick={() => handleDelate(item?._id)} className="bg-red-600 hover:cursor-pointer text-white p-2 rounded hover:bg-red-700 transition">
                    <BiTrash size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
};

export default MyCard;