

import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const useMenu = (category) => {

    const axiosPublic = useAxiosPublic()
   


    const { isPending,  data:menu , refetch} = useQuery({
        queryKey: ['menu', category],
        queryFn: () =>
          axiosPublic(`/menu?category=${category}`).then(res =>
            res.data
          ),
    })

    return [menu, refetch, isPending]

};

export default useMenu;