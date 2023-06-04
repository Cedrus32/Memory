import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
    let {cardKey, imgPrefix} = props;

    return (
        <div data-card-key={cardKey}>
            <img src={`./icons/${imgPrefix}.png`}/>
        </div>

    )
}
Card.propTypes = {
    cardKey: PropTypes.string.isRequired,
    imgPrefix: PropTypes.string.isRequired,
}

export default Card;
