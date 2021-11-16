import React, { Component } from "react";
import Card from "./Card";
import "./Deck.css";
import axios from "axios";
const API_BASE_URL = "https://deckofcardsapi.com/api/deck";

class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {deck: null, drawn: [], remainCards: 52 };
        this.getCard = this.getCard.bind(this);
        this.cardReset = this.cardReset.bind(this);
    }
    async componentDidMount() {
        let deck = await axios.get(`${API_BASE_URL}/new/shuffle/`);
        this.setState({ deck: deck.data });
    }
    async getCard() {
        let id = this.state.deck.deck_id;
        try {
            let cardUrl = `${API_BASE_URL}/${id}/draw/`;
            let cardRes = await axios.get(cardUrl);
            if (!cardRes.data.success) {
                throw new Error("No card remaining!")
            }
        
            let card = cardRes.data.cards[0];
            let decrementCards = this.state.remainCards--;
            this.setState(st => ({
                drawn: [
                    ...st.drawn,
                    {
                        id: card.code,
                        image: card.image,
                        name: `${card.value} of ${card.suit}`,
                        remainCards: decrementCards
                    }
                ]
            }));
        } catch(err) {
            alert(err);
        }
    }

    async cardReset() {
        let deck = await axios.get(`${API_BASE_URL}/new/shuffle/`);
        this.setState({
            deck: deck.data,
            drawn: [],
            remainCards: 52
        });
    }

    // https://deckofcardsapi.com/api/deck/${deck_id}/draw
    render() {
        const cards = this.state.drawn.map(c => (
            <Card key={c.id} name={c.name} image={c.image} />
        ));
        return (
            <div>
                <h1 className="Deck-title">
                    <span className="Deck-diamond">♦</span> 
                    Card Dealer 
                    <span className="Deck-diamond">♦</span>
                </h1>
                <h2 className="Deck-title subtitle">
                    <span className="Deck-diamond">♦</span> 
                    A little demo made with React 
                    <span className="Deck-diamond">♦</span>
                </h2>
                <button className="Deck-btn" onClick={this.getCard}>Get Card!</button>
                
                <h4 className="Deck-remaincards">Cards Remaining: {this.state.remainCards}</h4>
                <div className="Deck-cardarea">{cards}</div>
            </div>
        )
    }
}

export default Deck;