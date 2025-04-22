import React from 'react';

import useAuth from '../hooks/useAuth';
import useAxiosSecure from '../hooks/useAxiosSecure';

const Card = ({item}) => {
    const {user} = useAuth();

    const axiosSecure = useAxiosSecure()

    const {image, name, recipe, price, _id} = item;
    const handleAddToCart = async (id) => {
        console.log(id)
        const cartItem = {menuItemId: id, name, image, price, email: user?.email}
        const response = await axiosSecure.post('/carts', cartItem)
        console.log(response.data)

    };

    return (
        <div className="card card-compact  bg-base-100 shadow-xl rounded-none relative">
        <figure><img src={image} className="w-full" alt="Shoes" /></figure>
        <p className="absolute top-4 right-5 p-2 text-light bg-footer-200">${price}</p>
        <div className="card-body text-center">
            <h2 className="card-title text-center flex justify-center">{name}</h2>
            <p>{recipe}</p>
            <div className="card-actions justify-center">
            <button  className="btn text-center text-[#BB8506] text-xl uppercase my-6 border-0 border-b-4 border-[#BB8506] rounded-2xl hover:bg-footer-200" onClick={() => handleAddToCart(_id)}>add to cart</button>
            </div>
        </div>
    </div>
    );
};

export default Card;