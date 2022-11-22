import React, { useState } from 'react';
import Column from '../Column';
import "./styles.scss";
import { initialData } from "../../actions/initialData";
import { useEffect } from 'react';
import { isEmpty } from "lodash";
import { mapOrder } from '../../utilities/sorts';

function BoardContent(props) {
    const [board, setBoard] = useState({});
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        const boardFromDb = initialData.boards.find(board => board.id === 'board-1');
        if (boardFromDb) {
            setBoard(boardFromDb);


            setColumns(mapOrder(boardFromDb.columns, boardFromDb.columnOrder, 'id'));
        }
    }, []);

    if (isEmpty(board)) {
        return <div className='not-found'>Board not found !</div>
    }

    return (
        <div className="board-content">
            {columns.map((column, index) =>
                <Column key={column.id} column={column} />
            )}
        </div>
    );
}

export default BoardContent;