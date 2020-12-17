import React, { FC } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import { taskItem } from "../Views/Main";

const TaskContainer = styled.div`
    display: block;
    background: white;
    padding: 20px;
    margin: 4px;
    border-radius: 8px;
`;

type taskProps = {
    taskItem: taskItem,
    index: number,
}

const Task: FC<taskProps> = ({taskItem, index}) => {
    return (
        <Draggable draggableId={`${taskItem.id}`} index={index}>
            {(provided) => (
                <TaskContainer {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    {taskItem.content}
                </TaskContainer>
                )}
        </Draggable>
    );
};

export default Task;
