import React, {useState, useEffect} from 'react';
import uniqid from 'uniqid';
import Header from './Header';
import Board from './Board';

const Main = () => {
    const [scoreCur, setScoreCur] = useState(0);
    const [scoreTop, setScoreTop] = useState(null);
    const [cards, setCards] = useState([]);
    const [clickStatus, setClickStatus] = useState(null);
    const [clickLog, setClickLog] = useState([]);
    
    // component mount
    useEffect(() => {
        updateCards();
    }, [])

    // state update
    useEffect(() => {
        console.log('finish clickCheck');
        console.log('updateScore()');
        console.log('updateCards() per conditional');
    }, [clickStatus])

    function checkClick(e) {
        console.log(e.target.dataset.cardKey);
        if (clickLog.includes(e.target.dataset.cardKey)) {
            setClickStatus(false);
        } else {
            setClickStatus(true);
            setClickLog([...clickLog, e.target.dataset.cardKey]);
        }
    }

    function updateCards() {
        let tempCards = [];
        for (let i = 0; i < 12; i++) {
            tempCards.push({cardKey: uniqid(), imgPrefix: `${i + 1}`});
        }
        setCards([...tempCards]);
    }

    return (
        <>
            <Header scoreCur={scoreCur} scoreTop={scoreTop}/>
            <Board cardMeta={cards} checkClick={checkClick}/>
        </>
    )
}

export default Main;
