import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import '../App.css'


const CARD_ELEMENT_OPTIONS = {
    style: {
        base: {
            color: "#32325d",
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
                color: "#aab7c4",
            },
        },
        invalid: {
            color: "#fa755a",
            iconColor: "#fa755a",
        },
    },
};

function CardSection() {
    return (
        <div className='check-out__input-label-container'>
            <label className='check-out-input-label'>Card Details</label>
            <CardElement className="StripeElement" options={CARD_ELEMENT_OPTIONS} />
        </div>
    );
};

export default CardSection;