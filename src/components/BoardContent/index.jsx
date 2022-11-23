import { isEmpty } from "lodash";
import React, { useEffect, useState } from 'react';
import { initialData } from "../../actions/initialData";
import { mapOrder } from '../../utilities/sorts';
import Column from '../Column';
import { Container, Draggable } from 'react-smooth-dnd';
import "./styles.scss";

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

    const onColumnDrop = (dropResult) => {
        console.log(dropResult);
    };

    return (
        <div className="board-content">
            <Container
                orientation="horizontal"
                onDrop={onColumnDrop}
                getChildPayload={index =>
                    columns[index]
                }
                dragHandleSelector=".column-drag-handle"
                dropPlaceholder={{
                    animationDuration: 150,
                    showOnTop: true,
                    className: 'column-drop-preview'
                }}
            >
                {columns.map((column, index) => (
                    <Draggable key={index}>
                        <Column column={column} />
                    </Draggable>
                ))}
            </Container>
        </div>
    );
}

export default BoardContent;