

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useTotalCount = (category) => {

    const axiosPublic = useAxiosPublic();


    const { isLoading,  data:count} = useQuery({
        queryKey: ['count', category],
        queryFn: () =>
          axiosPublic.get(`/count?category=${category}`).then(res =>
            res.data
          ),
    })

    return [count, isLoading]

};

export default useTotalCount;