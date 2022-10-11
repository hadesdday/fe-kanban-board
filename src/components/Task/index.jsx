import React from 'react';
import './styles.scss';

function Task(props) {
    return (
        <li className='task-item'>
            <img src="https://picsum.photos/500/500" alt="404" />
            This is the title of the card
        </li>
    );
}

export default Task;