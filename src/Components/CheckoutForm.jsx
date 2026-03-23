import {
    CardNumberElement,
    CardExpiryElement,
    CardCvcElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./checkoutForm.css"
import { Link } from "react-router-dom";
import axios from "axios";
import URL from "./config/API";

const elementStyle = {
    style: {
        base: {
            fontSize: "16px",
            color: "#32325d",
            "::placeholder": { color: "#aab7c4" },
        },
        invalid: {
            color: "#fa755a",
        },
    },
};




const CheckoutForm = ({ totalPrice }) => {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
   const [token] = useState(localStorage.getItem("token"))
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [paymentIntent, setPaymentIntent] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        setLoading(true);

        // 1️⃣ Create PaymentIntent
        const res = await fetch(`${URL.BASE_URL}/payment/create-payment-intent`, {
            method: "POST",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
            body: JSON.stringify({ amount: totalPrice }),
        });

        const { clientSecret } = await res.json();

        // 2️⃣ Confirm Payment
        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardNumberElement),
                billing_details: { name },
            },
        });

        if (result.error) {
            setMessage(result.error.message);
        } else if (result.paymentIntent.status === "succeeded") {
            // console.log(result);
           document.querySelector(".modal-backdrop")?.classList.remove("modal-backdrop")
            await SavePaymentDetails(result)
            localStorage.setItem("paymentIntent", result.paymentIntent.id)
            // setMessage("✅ Payment Successful!");
            navigate("/invoice");
        }

        //  {
        //           state: {
        //             amount: totalPrice,
        //             paymentId: result.paymentIntent.id,
        //           },
        //         }
        setLoading(false);
    };



    const SavePaymentDetails = async (result) => {
        const parma = {
            paymentIntentId: result.paymentIntent.id,
            amount: result.paymentIntent.amount,
            currency: result.paymentIntent.currency,
            status: result.paymentIntent.status,
            paymentMethod: result.paymentIntent.payment_method,
            clientSecret: result.paymentIntent.client_secret,
            captureMethod: result.paymentIntent.capture_method,
            confirmationMethod: result.paymentIntent.confirmation_method,
            receiptEmail: result.paymentIntent.receipt_email,
            livemode: result.paymentIntent.livemode,
            canceledAt: result.paymentIntent.canceled_at,
            cancellationReason: result.paymentIntent.cancellation_reason
        }
        axios.post(`${URL.BASE_URL}/payment/save-payment`, parma,{
            headers:{
                "Content-Type":"application/json",
                 "Authorization": `Bearer ${token}`
            }
        }).then(res => {
            setMessage("✅ Payment Successful!");
        }).then(res => {

        })

    }

    return (
        <>
            <div className="modal fade" id="payment-add">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <button className="modal-close" data-bs-dismiss="modal"><i className="icofont-close"></i></button>
                        <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }} className="setStyle">
                            <h3>Payment Details</h3>

                            <input
                                type="text"
                                placeholder="Cardholder Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />

                            <label>Card Number</label>
                            <CardNumberElement options={elementStyle} />

                            <label>Expiry Date</label>
                            <CardExpiryElement options={elementStyle} />

                            <label>CVC</label>
                            <CardCvcElement options={elementStyle} />


                            <button className='btn btn-inline' disabled={loading || !stripe}>
                                {loading ? "Processing..." : `Pay ${totalPrice}`}
                            </button>

                            <p>{message}</p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CheckoutForm;
