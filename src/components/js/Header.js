import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Header.css";

// icons
import {
    AddShoppingCartOutlined,
    LocationOnOutlined,
    Search,
} from "@mui/icons-material";

import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

const Header = () => {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleLogout = () => {
        if (user) {
            auth.signOut().then(() => {
                dispatch({ type: "SET_USER", user: null });
            });
        }
    };

    return (
        <div className="header">
            <NavLink to="/" className="brand">
                <img
                    className="header_logo"
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="Header__Logo"
                />
            </NavLink>
            <NavLink to="/" className="location-option">
                <div className="location-icon">
                    <LocationOnOutlined />
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Deliver to</span>
                    <span className="header__optionLineTwo">Uzbekistan</span>
                </div>
            </NavLink>
            <form className="form__search">
                <div className="search__input">
                    <input type="text" className="header__searchInput" />
                </div>
                <button className="header-search-icon">
                    <Search className="header__searchIcon" />
                </button>
            </form>
            <div className="header__nav">
                <NavLink
                    to={!user && "/register/login"}
                    onClick={handleLogout}
                    className="header__option">
                    <span className="header__optionLineOne">
                        Hello, {!user ? "Guest" : user.email}
                    </span>
                    <span className="header__optionLineTwo">
                        {user ? "Sign Out" : "Sign In"}
                    </span>
                </NavLink>
                <NavLink to="/" className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </NavLink>
                <NavLink to="/" className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </NavLink>
                <NavLink to="/purchase/cart" className="header__optionBasket">
                    <AddShoppingCartOutlined />
                    <span className="header__optionLineTwo">
                        {basket.length}
                    </span>
                </NavLink>
            </div>
        </div>
    );
};

export default Header;
