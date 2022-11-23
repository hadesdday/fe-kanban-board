import React from 'react';
import './styles.scss';

function Card(props) {
    const { card } = props;

    return (
        <div className='card-item'>
            {card.cover &&
                <img src={card.cover} alt="404" className='card-cover' onMouseDown={e => e.preventDefault()} />
            }
            {card.title}
        </div>
    );
}

export default Card;