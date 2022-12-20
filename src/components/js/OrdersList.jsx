import React from "react";

const OrdersList = ({ order }) => {
    return (
        <div className="order-list">
            <div className="order-list-image">
                <img src={order.productImage} alt={order.title} />
            </div>
            <div className="order-list-content">
                <h2>{order.title}</h2>
                <p>${order.price}</p>
            </div>
        </div>
    );
};

export default OrdersList;
