import React from "react";
import "../css/PurchaseCart.css";
import "../css/PurchaseProduct.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import PurchaseProduct from "./PurchaseProduct";

const PurchaseCart = () => {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="purchase-container">
            <div className="row">
                <Subtotal />

                <div className="purchase-left">
                    <div className="active-cart">
                        <div className="cart-inner">
                            <div className="cart-header">
                                <div className="flex">
                                    <h2>Your Shopping Cart</h2>
                                    <div className="user-panel">
                                        <h2>Hello, user@gmail.com</h2>
                                        <small>
                                            <strong>ID:</strong>
                                            4545454-454-455
                                        </small>
                                    </div>
                                </div>

                                <a href="/" className="selected-items">
                                    DeSelect all items
                                </a>
                            </div>
                            <div className="active-cart-price">
                                <h4>Price</h4>
                            </div>
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
                </div>
            </div>
        </div>
    );
};

export default PurchaseCart;
