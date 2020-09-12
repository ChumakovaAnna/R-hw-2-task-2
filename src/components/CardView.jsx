import React from "react";
import PropTypes from "prop-types";
import ShopCard from "./ShopCard";
import { nanoid } from 'nanoid';

CardView.propTypes = {};

function CardView(props) {
	const { cards } = props;
	return (
		<div className="cardView">
			{cards.map((item) => 
				<ShopCard key={nanoid()} item={item}></ShopCard>
			)}
		</div>
	);
}

export default CardView;
