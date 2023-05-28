import React, {useState} from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import Card from './Card';

const Board = (props) => {
    let {cardMeta, checkClick} = props;

    function randomize() {
        let randomLog = [];
        let tempCards = [];
        for (let i = 0; i < 12; i++) {
            let randomIndex;
            let indexIsUnique = false;
            while (!indexIsUnique) {
                randomIndex = Math.floor(Math.random() * 12);
                if (!randomLog.includes(randomIndex)) {
                    randomLog.push(randomIndex);
                    indexIsUnique = true;
                }
            }
            console.log(cardMeta[randomIndex].cardKey, cardMeta[randomIndex].imgPrefix);
            tempCards.push(<Card key={cardMeta[randomIndex].cardKey} cardKey={cardMeta[randomIndex].cardKey} imgPrefix={cardMeta[randomIndex].imgPrefix}/>)
        }
        return tempCards;
    }

    let cards;
    if (cardMeta.length !== 0) {
        cards = randomize();
    }

    return (
        <section id='gameboard'>
            {cards}
        </section>
    )
}
Board.propTypes = {
    cardMeta: PropTypes.array.isRequired,
    checkClick: PropTypes.func.isRequired,
}

export default Board;
