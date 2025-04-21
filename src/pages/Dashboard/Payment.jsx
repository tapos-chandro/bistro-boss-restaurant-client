import React from 'react';

const Payment = () => {
    return (

        <div className="flex justify-center items-center h-screen w-full ">
            <div className="w-full  text-center">
                <h2 className="text-2xl font-semibold mb-8">PAYMENT</h2>
                <form className=" gap-4">
                    <div className='max-w-2xl flex justify-between my-5 mx-auto'>
                    <input type="text" placeholder="Card number" className="input input-bordered w-full " />
                    <input type="text" placeholder="MM/YY/CVC" className="input input-bordered w-full" />
                    </div>
                    <button className="btn bg-purple-700 rounded-lg p-6 hover:bg-purple-800 text-white w-full max-w-sm">Pay</button>
                </form>
            </div>
        </div>
    );
};

export default Payment;