import React, { Component } from "react";

class Card extends Component {
	constructor(props) {
		super(props);
		// transform: translate(10px, 20px) rotate(20deg);
		let xPos = Math.floor(Math.random() * 40 - 20);
		let yPos = Math.floor(Math.random() * 40 - 20);
		let angle = Math.floor(Math.random() * 90 - 45);
		let _transform = `transform(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
	}
	render() {
		return (
			<img 
				style={{ transform: this._transform }} 
				className="Card" src=
				{this.props.image} alt={this.props.name} />
		)
	}
}

export default Card;