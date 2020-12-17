import React, { FC } from 'react';
import {
    Draggable,
    DraggableProvided,
    DraggableStateSnapshot,
    DraggingStyle,
    NotDraggingStyle,
} from 'react-beautiful-dnd';
import { taskItem } from '../Views/Main';
import { ParagraphTask, TaskContainer, TitleTask } from '../Styled/Main';
import COLORS from '../CONSTS/COLORS';

type taskProps = {
    taskItem: taskItem;
    index: number;
};

const getTaskStyle = (draggingStyle: DraggingStyle | NotDraggingStyle, isDragging: boolean, draggingOver: string) =>
    isDragging && !draggingOver
        ? {
              backgroundColor: COLORS.removingTask,
              ...draggingStyle,
          }
        : { ...draggingStyle };

const Task: FC<taskProps> = ({ taskItem, index }) => {
    return (
        <Draggable draggableId={taskItem.id} index={index}>
            {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
                <TaskContainer
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getTaskStyle(provided.draggableProps.style, snapshot.isDragging, snapshot.draggingOver)}
                    ref={provided.innerRef}>
                    <TitleTask>{taskItem.title}</TitleTask>
                    <ParagraphTask>{taskItem.content}</ParagraphTask>
                </TaskContainer>
            )}
        </Draggable>
    );
};

export default Task;
