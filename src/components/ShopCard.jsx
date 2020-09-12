import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShopCard extends Component {
  static propTypes = {
    props: PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    }),
  };

  constructor(props) {
    super();
    this.props = props;
    this.name = props.item.name;
    this.price = props.item.price;
    this.color = props.item.color;
    this.img = props.item.img;
    this.button = "Add to cart"
  }

  render() {
    return (
      <div className="shopCard">
        <div className="text_shopCard">
          <h2 className="name">{this.name}</h2>
          <span className="color">{this.color}</span>
          <div className="priceButton_shopCard">
            <span className="price">${this.price}</span>
            <button className="button">{this.button.toUpperCase()}</button>
          </div>
        </div>
        <img className="image_shopCard" src={this.img} alt={`${this.name}, ${this.color}`}></img>
      </div>
    );
  }
}


export default ShopCard;