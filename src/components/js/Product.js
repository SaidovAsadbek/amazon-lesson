import React from "react";
import "../css/Product.css";

// icons
import { StarBorderOutlined } from "@mui/icons-material";

const Product = ({ id, title, price, rating, productImage }) => {
	return (
		<div className="product" id={id}>
			<div className="product__info">
				<div className="product__title">
					<h2>{title}</h2>
					<strong>${price}</strong>
					<div className="product__rating">
						{Array(rating)
							.fill()
							.map((_, i) => (
								<p key={i}>
									<StarBorderOutlined />
								</p>
							))}
					</div>
				</div>
				<div className="product__image">
					<a href="/" className="product__link">
						<div className="a-section">
							<img src={productImage} alt={title} />
						</div>
					</a>
				</div>
				<div className="product__buttons">
					<a href="/" className="more">
						See more
					</a>
					<button className="more">Add To Basket</button>
				</div>
			</div>
		</div>
	);
};

export default Product;
