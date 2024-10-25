import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useCart from '../../Hooks/useCart';
import { useEffect } from 'react';
import useAuth from '../../Hooks/UseAuth/UseAuth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CheckOutForm = () => {
  const stripe = useStripe();
  const { user } = useAuth();
  const elements = useElements();
  const [error, setError] = useState("")
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("")
  const [transactionId, setTransactionId] = useState("")
  const [cart, refetch] = useCart();
  const navigate = useNavigate();
  const toltalPrice = cart.reduce((total, item) => total + item.price, 0)
  useEffect(() => {
    if (toltalPrice > 0) {
      axiosSecure.post('/create-payment-intent', { price: toltalPrice })
        .then(res => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        })
    }
  }, [axiosSecure, toltalPrice])
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (stripe || !elements) {
      //

    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card
    })
    if (error) {
      console.log("payment error", error);
      setError(error.message)
    }
    else {
      console.log("payment method ", paymentMethod);
      setError("")
    }
    // confirm Payment
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || "anonymous",
          name: user?.displayName || "anonymous"
        }
      }
    })
    if (confirmError) {
      console.log("confirm error", confirmError.message);
      setError(confirmError.message)

    }
    else {
      console.log("payment intent", paymentIntent);
      setError("")

    }
    if (paymentIntent.status === "succeeded") {
      console.log("transaction id", paymentIntent.id);
      setTransactionId(paymentIntent.id)
      // now save the payment in the database
      const payment = {
        email: user?.email,
        price: toltalPrice,
        transactionId: paymentIntent.id,
        date: new Date(),// utc data convert use moment js to
        cardId: cart.map(item => item._id),
        menuItemId: cart.map(item => item.menuId),
        status: "pending"

      }
      const res = await axiosSecure.post("/payments", payment)
      console.log("payment saved", res.data);
      refetch();
      if (res.data?.paymentResult?.insertedId) {
        toast.success("Successfully Payment")
        navigate("/dashboard/history")
      }
     

    }

  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
        {/* {errorMessage && <p className="text-red-600 mb-4"></p>} */}

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Card Number</label>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
              hidePostalCode: false, // Show postal code field in CardElement
            }}
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <p className='text-red-500 font-bold mb-2'>{error}</p>
        <button
          type="submit"
          disabled={!stripe || !clientSecret}
          className="w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed font-bold"
        >
          Payment
        </button>
        {
          transactionId && <p className='font-bold'>Your Transaction id:<span className='text-orange-600 '> {transactionId}</span></p>
        }
      </form>
    </div>
  );
};

export default CheckOutForm;