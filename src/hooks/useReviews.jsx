import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useReviews = () => {

    const axiosPublic = useAxiosPublic();

    const {data : review = [], isPending, isLoading } = useQuery({
        queryKey: ['review'],
        queryFn: () =>
            axiosPublic.get('/review').then(res => res.data) ,
    }); 

    return [review, isPending, isLoading]

};

export default useReviews;