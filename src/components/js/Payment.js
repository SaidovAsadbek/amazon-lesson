import React, { useState, useEffect } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { NavLink, useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import CurrencyFormat from "react-currency-format";
import PurchaseProduct from "./PurchaseProduct";
import "../css/Payment.css";
import api from "./api";
import axios from "axios";

const Payment = () => {
    const [{ basket, user }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getClientSecret = async () => {
            await api({
                method: "POST",
                url: `/payment/create?total=${getBasketTotal(basket) * 100}`,
            })
                .then((response) => {
                    // console.log(response);
                    setClientSecret(response.data.clientSecret);
                })
                .catch((error) => console.log(error));
        };
        getClientSecret();
    }, [basket]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe
            .confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            })
            .then((response) => {
                // console.log("Payload", response);
                setSucceeded(true);
                setError(null);
                setProcessing(false);

                navigate("/orders");
            })
            .catch((error) => console.log(error));
    };

    const handleChange = (e) => {
        setDisabled(false);
        setError(e.error ? e.error.message : null);
    };

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (
                    <NavLink to="/purchase/cart">
                        {basket?.length} items
                    </NavLink>
                    )
                </h1>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>155 Uzbekistan Jizzax</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review item and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map((item, i) => (
                            <PurchaseProduct
                                key={i}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                productImage={item.productImage}
                                rating={item.rating}
                                color={item.color}
                            />
                        ))}
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Methods</h3>
                    </div>

                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button
                                    disabled={
                                        processing || disabled || succeeded
                                    }>
                                    <span>
                                        {processing ? (
                                            <p>Processing...</p>
                                        ) : (
                                            "Buy Now"
                                        )}
                                    </span>
                                </button>
                            </div>
                            {error ||
                                (succeeded && <div>{error || succeeded}</div>)}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
