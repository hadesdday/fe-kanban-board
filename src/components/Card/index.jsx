import React from 'react';
import './styles.scss';

function Card(props) {
    const { card } = props;

    return (
        <li className='card-item'>
            {card.cover && <img src={card.cover} alt="404" className='card-cover'/>}
            {card.title}
        </li>
    );
}

export default Card;