import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useCart from '../../../hooks/useCart';

const stripPromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {
    const [cart] =useCart()
    const total =cart.reduce((sum, item)=>sum + item.fees,0)
    const fees = parseFloat(total).toFixed(2)
    return (
        <div className='w-full'>
            <SectionTitle heading="Payment page"></SectionTitle>
            <h2 className='text-3xl'></h2>
            <Elements stripe={stripPromise}>
                <CheckoutForm fees={fees}></CheckoutForm>
            </Elements>

        </div>
    );
};

export default Payment;