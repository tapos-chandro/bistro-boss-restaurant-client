// import { useQuery } from "@tanstack/react-query";


import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

// import useAxiosPublic from "./useAxiosPublic";


const useMenu = (category) => {

    console.log(category)

    const axiosPublic = useAxiosPublic()


    const { isPending,  data:menu , refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: () =>
          axiosPublic.get(`/menu?category=${category}`).then(res =>
            res.data
          ),
    })
    return [menu, refetch, isPending]

};

export default useMenu;