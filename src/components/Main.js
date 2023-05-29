import React, {useState, useEffect} from 'react';
import uniqid from 'uniqid';
import Header from './Header';
import Board from './Board';

const Main = () => {
    const [scoreCur, setScoreCur] = useState(0);
    const [scoreTop, setScoreTop] = useState(0);
    const [cards, setCards] = useState([]);
    const [clickLog, setClickLog] = useState([]);
    
    // component mount
    useEffect(() => {
        updateCards();
    }, [])

    function handleClick(e) {
        console.log(e);
        if (e.target.tagName === 'IMG') {
            console.log('image clicked');
            let clickIsValid = checkClick(e);
            if (clickIsValid) {
                setClickLog([...clickLog, e.target.parentNode.dataset.cardKey]);
                setScoreCur(scoreCur + 1);
                if (scoreTop === scoreCur) {
                    setScoreTop(scoreCur + 1);
                }
            } else {
                setClickLog([]);
                setScoreCur(0);
                updateCards();

            }
        }
    }

    function checkClick(e) {
        if (clickLog.includes(e.target.parentNode.dataset.cardKey)) {
            return false;
        } else if (!clickLog.includes(e.target.parentNode.dataset.cardKey)) {
            return true;
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
            <Board cardMeta={cards} handleClick={handleClick}/>
        </>
    )
}

export default Main;
