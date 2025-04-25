import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCarts = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth()

    const {data:cartItems  = [], refetch, isLoading , isPending} = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const response = await axiosSecure.get(`/carts?email=${user?.email}`)
            return response.data
        }
    })
    return [cartItems, refetch, isLoading, isPending]
    
};

export default useCarts;