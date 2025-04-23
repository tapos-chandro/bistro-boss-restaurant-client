import React from 'react';
import CheckoutFrom from './CheckoutFrom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK_KYE);

const Payment = () => {
    return (

        <div className="flex justify-center items-center h-screen w-full ">
            <div className="w-full  text-center">
                <h2 className="text-2xl font-semibold mb-8">PAYMENT</h2>
                <Elements stripe={stripePromise}>
                    <div className='max-w-3xl mx-auto px-14'>
                    <CheckoutFrom></CheckoutFrom>
                    </div>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;