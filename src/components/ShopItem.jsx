import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShopItem extends Component {
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
      <div className="shopItem">
        <h2>{this.name}</h2>
        <span className="color">{this.color}</span>
        <img className="image_shopItem" src={this.img} alt={`${this.name}, ${this.color}`}></img>
        <span className="price">${this.price}</span>
        <button className="button">{this.button.toUpperCase()}</button>
      </div>
    );
  }
}


export default ShopItem;