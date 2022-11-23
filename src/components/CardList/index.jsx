import React from 'react';
import Card from '../Card';

function CardList(props) {
    const { cards } = props;

    return (
        <ul className='card-list'>
            {
                cards.map((card, index) => {
                    (
                        <Card key={index} card={card} />
                    )
                })
            }
        </ul>
    );
}

export default CardList;
