
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useUser = () => {
    const {user} = useAuth();

    const axiosSecure = useAxiosSecure();

    const { data: usersRole, isLoading } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            const res = await axiosSecure(`/users?email=${user?.email}`)
            console.log(res.data)
            return res.data
        
        }
    })

    return [usersRole, isLoading]
};

export default useUser;