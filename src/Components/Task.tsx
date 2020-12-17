import React, { FC } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { taskItem } from '../Views/Main';
import { ParagraphTask, TaskContainer, TitleTask } from '../Styled/Main';

type taskProps = {
    taskItem: taskItem;
    index: number;
};



const Task: FC<taskProps> = ({ taskItem, index }) => {
    return (
        <Draggable draggableId={`${taskItem.id}`} index={index}>
            {(provided) => (
                <TaskContainer {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    <TitleTask>{taskItem.title}</TitleTask>
                    <ParagraphTask>{taskItem.content}</ParagraphTask>
                </TaskContainer>
            )}
        </Draggable>
    );
};

export default Task;
