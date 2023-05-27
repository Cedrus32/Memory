import React, { useState, useEffect } from 'react';
import Header from './Header';
import Board from './Board';

const Main = () => {
    const [scoreCur, setScoreCur] = useState(0);
    const [scoreTop, setScoreTop] = useState(null);

    return(
        <>
            <Header scoreCur={scoreCur} scoreTop={scoreTop}/>
            <Board />
        </>
    )
}

export default Main;
