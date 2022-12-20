import React from "react";
import "../css/Orders.css";
import OrdersList from "./OrdersList";
import { useStateValue } from "./StateProvider";

const Orders = () => {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="order">
            <div className="order-user">
                <h1>{user?.email}</h1>
            </div>
            Orders
            {basket.map((order, index) => (
                <div key={index}>
                    <OrdersList order={order} />
                </div>
            ))}
        </div>
    );
};

export default Orders;
