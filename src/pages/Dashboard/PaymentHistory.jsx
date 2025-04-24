import { Query, useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";


const PaymentHistory = () => {

  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();


  const { data, refetch } = useQuery({
    queryKey: ['payment'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user?.email}`)
      return res.data;
    }
  })

  console.log(data)


  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      {/* <div className="text-center mb-6">
          <p className="text-sm text-yellow-600 italic">------</p>
          <h1 className="text-2xl sm:text-3xl font-semibold border-b-2 inline-block mt-2 pb-1">
            PAYMENT HISTORY
          </h1>

        </div> */}

      <SectionTitle subTitle="At a Glance!" mainTitle="Payment History" />
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-4 sm:p-6 overflow-x-auto">
        <h2 className="sm:text-xl font-semibold mb-4 text-2xl">
          Total Payments: <span className="font-bold text-xl">{data?.length}</span>
        </h2>

        <table className="w-full text-sm sm:text-base">
          <thead className="rounded-lg ">
            <tr className="bg-[#c2914e] text-white text-left rounded-lg h-9">
              <th className="px-4 rounded-tl-lg py-4">EMAIL</th>
              <th className="px-4 py-4">CATEGORY</th>
              <th className="px-4 py-4">TOTAL PRICE</th>
              <th className="px-4 py-4 rounded-tr-lg">PAYMENT DATE</th>
            </tr>
          </thead>
          <tbody>
            {
              data?.map(item =>
                <tr className="border-b border-gray-300 hover:bg-gray-50">


                  <td className="px-4 py-2">{item.email}</td>
                  <td className="px-4 py-2">{item?.menuDetails?.category}</td>
                  <td className="px-4 py-2">$ {item.price}</td>
                  <td className="px-4 py-2">{item.date}</td>

                </tr>
              )
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;