import { StarBorderOutlined } from "@mui/icons-material";
import React from "react";
import "../css/PurchaseProduct.css";

const PurchaseProduct = () => {
    /// >>>>> props
    return (
        <div className="shopping__cartItems">
            <div className="basketItem">
                <div className="activeCartView">
                    <div className="active-cart-content">
                        <div className="content-image">
                            <label htmlFor="">
                                <input type="checkbox" name="" id="" />
                            </label>
                            <div className="check-image">
                                <a href="/">
                                    <img src="" alt="Product-image" />
                                </a>
                            </div>
                        </div>
                        <div className="content-text">
                            <a href="/" className="context-text-title">
                                <h2>Title</h2>
                            </a>
                            <div className="content-color">
                                <div className="product-color">
                                    <strong>Color:</strong>
                                    <span>Gold</span>
                                    <div className="product__rating">
                                        <StarBorderOutlined />
                                    </div>
                                </div>
                                <div className="product-model">
                                    <strong>Configuration:</strong>
                                    <span>Without AppleCare+</span>
                                </div>
                                <div className="flex">
                                    <li>
                                        QTY: 1 <span>|</span>
                                    </li>
                                    <li className="link">
                                        <button>Delete <span>|</span></button>
                                    </li>
                                    <li className="link">
                                        <a href="/compare">
                                            Compare with similar items
                                        </a>
                                    </li>
                                </div>
                            </div>
                        </div>
                        <div className="content-price">
                            <small>
                                <strong>ID: 1515-554-5545</strong>
                            </small>
                            <p>$price</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseProduct;
