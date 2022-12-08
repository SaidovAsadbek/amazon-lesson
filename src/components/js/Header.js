import React from "react";
import "../css/Header.css";

// icons
import {
	AddShoppingCartOutlined,
	LocationOnOutlined,
	Search,
} from "@mui/icons-material";

const Header = () => {
	return (
		<div className="header">
			<a href="/" className="brand">
				<img
					className="header_logo"
					src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt="Header__Logo"
				/>
			</a>
			<a href="/" className="location-option">
				<div className="location-icon">
					<LocationOnOutlined />
				</div>
				<div className="header__option">
					<span className="header__optionLineOne">Deliver to</span>
					<span className="header__optionLineTwo">Uzbekistan</span>
				</div>
			</a>
			<form className="form__search">
				<div className="search__input">
					<input type="text" className="header__searchInput" />
				</div>
				<button className="header-search-icon">
					<Search className="header__searchIcon" />
				</button>
			</form>
			<div className="header__nav">
				<a href="/" className="header__option">
					<span className="header__optionLineOne">Hello, Guest</span>
					<span className="header__optionLineTwo">Sign In</span>
				</a>
				<a href="/" className="header__option">
					<span className="header__optionLineOne">Returns</span>
					<span className="header__optionLineTwo">& Orders</span>
				</a>
				<a href="/" className="header__option">
					<span className="header__optionLineOne">Your</span>
					<span className="header__optionLineTwo">Prime</span>
				</a>
				<a href="/" className="header__optionBasket">
					<AddShoppingCartOutlined />
					<span className="header__optionLineTwo">0</span>
				</a>
			</div>
		</div>
	);
};

export default Header;
