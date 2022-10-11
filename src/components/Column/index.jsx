import React from 'react';
import Task from '../Task';
import './styles.scss';

function Column(props) {
    return (
        <div className="column">
            <header>Brainstorm</header>
            <ul className='task-list'>
                <Task />
                <li className='task-item'>This is the title of the card1</li>
                <li className='task-item'>This is the title of the card2</li>
                <li className='task-item'>This is the title of the card3</li>
                <li className='task-item'>This is the title of the card4</li>
                <li className='task-item'>This is the title of the card4</li>
                <li className='task-item'>This is the title of the card4</li>
                <li className='task-item'>This is the title of the card4</li>
                <li className='task-item'>This is the title of the card4</li>
            </ul>
            <footer>Add another card</footer>
        </div>
    );
}

export default Column;