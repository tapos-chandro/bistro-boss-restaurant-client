

import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const useMenu = (category, pageNumber=0, limit = 0) => {

    const axiosPublic = useAxiosPublic()
   

    console.log(pageNumber,'page numbers ')

    const { isPending,  data:menu , refetch} = useQuery({
        queryKey: ['menu', category, pageNumber, limit],
        queryFn: () =>
          axiosPublic(`/menu?category=${category}&&page=${pageNumber}&&limit=${limit}`).then(res =>
            res.data
          ),
    })

    return [menu, refetch, isPending]

};

export default useMenu;