import React from "react";
import "../css/Home.css";
import Product from "./Product";

const Home = () => {

    // static state
    return (
        <div className="home">
            <div className="home__container">
                <div className="home__banner">
                    <img
                        src="https://m.media-amazon.com/images/I/71YIDh9SEtL._SX3000_.jpg"
                        className="home__image"
                        alt="Banner"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="1"
                        title="Shop activity trackers and smartwatches"
                        price={555}
                        rating={5}
                        productImage="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_1X._SY304_CB639922137_.jpg"
                        color="Silver"
                    />
                    <Product
                        id="2"
                        title="For your Fitness Needs"
                        price={777}
                        rating={3}
                        productImage="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_1X._SY304_CB639748186_.jpg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
