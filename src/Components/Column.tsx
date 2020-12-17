import React, { FC } from 'react';
import { Droppable, DroppableProvided } from 'react-beautiful-dnd';
import { columnItem, taskItem } from '../Views/Main';
import Task from './Task';
import { ColumnContainer, ColumnTitle, TaskList } from '../Styled/Main';

interface PropsColumn {
    columnItem: columnItem;
}

const Column: FC<PropsColumn> = ({ columnItem }) => {
    return (
        <ColumnContainer>
            <ColumnTitle>{columnItem.title}</ColumnTitle>
            <Droppable droppableId={columnItem.id}>
                {(provided: DroppableProvided) => (
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
