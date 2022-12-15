import React from "react";
import "../css/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

import { useNavigate } from "react-router-dom";

const Subtotal = () => {
    const [{ basket }, dispatch] = useStateValue();
    const navigate = useNavigate();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => {
                    return (
                        <>
                            <p>
                                Subtotal {basket.length} items
                                <strong>{value}</strong>
                            </p>
                            <small className="subtotal__gift">
                                <input type="checkbox" name="" id="" />
                                This is order contains a gift
                            </small>
                        </>
                    );
                }}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={() => navigate("/")} >Purchase to checkout</button>
        </div>
    );
};

export default Subtotal;
