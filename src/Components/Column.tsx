import React, { FC } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { columnItem, taskItem } from '../Views/Main';
import Task from './Task';

const ColumnContainer = styled.div`
    flex-direction: column;
    border: 2px solid black;
    min-width: 20%;
    margin: 2rem;
`;
const Title = styled.h3`
    background-color: cadetblue;
    width: 100%;
    text-align: center;
    margin: 0;
    padding: 10px 0 10px 0;
`;
const TaskList = styled.div`
    padding: 2px;
    background: #9c4c4c;
`;

interface PropsColumn {
    columnItem: columnItem;
}

const Column: FC<PropsColumn> = ({ columnItem }) => {
    console.log(columnItem);
    return (
        <ColumnContainer>
            <Title>{columnItem.title}</Title>
            <Droppable droppableId={columnItem.id}>
                {(provided) => (
                    <TaskList ref={provided.innerRef} {...provided.droppableProps}>
                        {columnItem.tasks.map((task: taskItem, i: number) => (
                            <Task key={task.id} taskItem={task} index={i} />
                        ))}
                        {provided.placeholder}
                    </TaskList>
                )}
            </Droppable>
        </ColumnContainer>
    );
};

export default Column;
