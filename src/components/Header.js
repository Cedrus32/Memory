import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    let { scoreCur, scoreTop } = props;

    return (
        <section id='header'>
            <h1>Triforce Memory</h1>
            <div className='divider'>------------------------</div>
            <div id='scoreCur'>Current Score: {scoreCur}</div>
            <div id='scoreTop'>Top Score: {scoreTop}</div>
        </section>
    )
}
Header.propTypes = {
    scoreCur: PropTypes.number.isRequired,
    scoreTop: PropTypes.number,
}

export default Header;
