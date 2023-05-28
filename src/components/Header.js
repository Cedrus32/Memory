import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    let { scoreCur, scoreTop } = props;

    return (
        <section id='header'>
            <h1>Triforce Memory</h1>
            <div className='divider'>
                <div className='div-line'></div>
                <img src={'./icons/triforce.svg'}/>
                <div className='div-line'></div>
            </div>
            <span id='scoreCur'>Current Score: {scoreCur}</span>
            <span id='scoreTop'>Top Score: {scoreTop}</span>
        </section>
    )
}
Header.propTypes = {
    scoreCur: PropTypes.number.isRequired,
    scoreTop: PropTypes.number,
}

export default Header;
