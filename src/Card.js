import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
	constructor(props) {
		super(props);
		// transform: translate(10px, 20px) rotate(20deg);
		let xPos = Math.floor(Math.random() * 40 - 20);
		let yPos = Math.floor(Math.random() * 40 - 20);
		let angle = Math.floor(Math.random() * 90 - 45);
		this._transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
	}
	render() {
		return (
			<img 
				style={{ transform: this._transform }} 
				className="Card" 
				src={this.props.image} 
				alt={this.props.name} 
			/>
		)
	}
}

export default Card;