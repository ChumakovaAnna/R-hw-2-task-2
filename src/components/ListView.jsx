import React from "react";
import PropTypes from "prop-types";
import ShopItem from "./ShopItem";
import { nanoid } from 'nanoid';

CardView.propTypes = {};

function CardView(props) {
	const { items } = props;
	return (
		<div className="cardView">
			{items.map((item) => 
				<ShopItem key={nanoid()} item={item}></ShopItem>
			)}
		</div>
	);
}

export default CardView;