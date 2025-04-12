import React from 'react';

const Card = ({item}) => {
    const {image, name, recipe, price} = item;
    const handleAddToCart = () => {
        // Handle add to cart functionality here
        console.log(`${name} added to cart`);
    };
    return (
        <div className="card card-compact  bg-base-100 shadow-xl rounded-none relative">
        <figure><img src={image} className="w-full" alt="Shoes" /></figure>
        <p className="absolute top-4 right-5 p-2 text-light bg-footer-200">${price}</p>
        <div className="card-body text-center">
            <h2 className="card-title text-center flex justify-center">{name}</h2>
            <p>{recipe}</p>
            <div className="card-actions justify-center">
            <button className="btn text-center text-[#BB8506] text-xl uppercase my-6 border-0 border-b-4 border-[#BB8506]" onClick={handleAddToCart}>add to cart</button>
            </div>
        </div>
    </div>
    );
};

export default Card;