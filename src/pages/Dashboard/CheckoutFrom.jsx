import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import useCarts from './../../hooks/useCarts';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router';



const CheckoutFrom = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState('');
  const [cartsItems, refetch] = useCarts();
  const [clientSecret, setClientSecret] = useState('');
  const [transitionId , setTransitionId] = useState('');
  const total = cartsItems.reduce((sum, item) => sum + item.price, 0);
  const {user} = useAuth();
  const navigate = useNavigate();


  console.log(clientSecret)

  const axiosSecure = useAxiosSecure();


  useEffect(() => {

    if(total > 0 ){
      axiosSecure.post('/create-payment-intent', { price: total })
      .then(res => {
        console.log('payment intent', res.data.clientSecret)
        if (res.data.clientSecret) {
          // Handle the client secret here, e.g., save it to state or use it in the payment process
          console.log('Client Secret:', res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        }
      })
    }
    

  }, [total])



  const handleSubmit = async (event) => {

    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    })

    if (error) {
      console.log('payment error', error)
      setError(error.message)
    } else {
      console.log('payment method', paymentMethod)
      setError('')
    }

    // conform card payment
    
    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'anonymous',
            name: user?.displayName || 'anonymous',
          }
        }
      }
    )

    if (confirmError) {
      console.log('confirmError', confirmError)
    } else {
      if(paymentIntent.status === 'succeeded'){
        setTransitionId(paymentIntent.id)


        const payment = {
          email: user?.email,
          transactionId: paymentIntent.id,
          price: total,
          date : new Date(),
          cartsItems: cartsItems.map(item => item._id),
          menuItems: cartsItems.map(item => item.menuItemId),
          status: 'pending',
        }

       const response = await axiosSecure.post('/payments', payment)

       console.log('payment response', response.data)
       refetch()
       console.log('payment response', response.data.result.insertedId)

       if(response.data.result.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Payment Successful",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/dashboard/payment-history')
       }

        
      }

    }

  }

  return (
    <div>
      <h3 className='text-2xl font-semibold text-center my-10'>Total: ${total}</h3>

      <form onSubmit={handleSubmit} >
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <div className='text-red-600 text-center my-2'>{error}</div>
        {transitionId && <p className='text-green-800'> payment id : {transitionId}</p>}
        <button type="submit" className='btn btn-primary px-10 bg-dashboard-bg py-2 my-2 border-none rounded-lg' disabled = {!stripe || !clientSecret}>
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckoutFrom;