import React, { FC, useContext, useState } from 'react';
import { Container, DraggableWrapper, InputSubmitButton, InputTextElement, InputWrapper } from '../Styled/Main';
import Column from '../Components/Column';
import { DragDropContext, DraggableLocation, DropResult } from 'react-beautiful-dnd';
import { ColumnContext } from '../contexts/ColumnContext';

export interface taskItem {
    id: string;
    content: string;
    title: string;
}

export interface columnItem {
    id: string;
    title: string;
    tasks: taskItem[];
}

interface dropResType {
    destination?: DraggableLocation;
    source: DraggableLocation;
    draggableId: string;
}

const Main: FC = () => {
    const [inputContent, setInputContent] = useState<string>('');
    const [inputTitle, setInputTitle] = useState<string>('');
    const { columns, dispatch } = useContext(ColumnContext);

    const chooseColumnById = (colId: string): columnItem => {
        return columns.find((columnItem: columnItem) => columnItem.id === colId);
    };

    const updateSameColumn = (column: columnItem, taskList: taskItem[]): columnItem[] => {
        const newColumn = {
            ...column,
            tasks: taskList,
        };
        return columns.map((column: columnItem) => (column.id === newColumn.id ? newColumn : column));
    };

    const updateDifferentColumns = (
        startColumn: columnItem,
        finishColumn: columnItem,
        sourceIndex: number,
        destinationIndex: number
    ): columnItem[] => {
        const startTasks: taskItem[] = [...startColumn.tasks];
        const [removed] = startTasks.splice(sourceIndex, 1);

        const finishTasks: taskItem[] = [...finishColumn.tasks];
        finishTasks.splice(destinationIndex, 0, removed);

        const newStartColumn = {
            ...startColumn,
            tasks: startTasks,
        };
        const newFinishColumn = {
            ...finishColumn,
            tasks: finishTasks,
        };

        const newData = columns.map((column) => (column.id === newStartColumn.id ? newStartColumn : column));
        return newData.map((column) => (column.id === newFinishColumn.id ? newFinishColumn : column));
    };

    const reorder = (list: taskItem[], startIndex: number, endIndex: number): taskItem[] => {
        const result = [...list];
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };

    const onDragEnd = (result: DropResult) => {
        const { destination, source, draggableId }: dropResType = result;

        if (destination === null) {
            if (source.droppableId === 'done') {
                dispatch({
                    type: 'REMOVE_TASK',
                    columnId: source.droppableId,
                    taskId: draggableId,
                });
            }
            return;
        }
        if (destination.droppableId === source.droppableId && destination.index === source.index) return;

        const startColumn = chooseColumnById(source.droppableId);
        const finishColumn = chooseColumnById(destination.droppableId);

        if (startColumn === finishColumn) {
            const column: columnItem = chooseColumnById(source.droppableId);
            const newTaskList: taskItem[] = reorder(column.tasks, source.index, destination.index);
            dispatch({ type: 'UPDATE_COLUMNS', columns: updateSameColumn(column, newTaskList) });
        } else {
            dispatch({
                type: 'UPDATE_COLUMNS',
                columns: updateDifferentColumns(startColumn, finishColumn, source.index, destination.index),
            });
        }
    };

    const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputContent && inputTitle) {
            dispatch({
                type: 'ADD_TASK',
                task: { title: inputTitle, content: inputContent },
            });
            setInputContent('');
            setInputTitle('');
        }
    };

    return (
        <Container>
            <InputWrapper onSubmit={handleAddTask}>
                <InputTextElement
                    required
                    type="text"
                    value={inputTitle}
                    onChange={(e) => setInputTitle(e.target.value)}
                    placeholder="Title"
                />
                <InputTextElement
                    required
                    type="text"
                    value={inputContent}
                    onChange={(e) => setInputContent(e.target.value)}
                    placeholder="Content"
                />
                <InputSubmitButton type="submit" value="Add Task" />
            </InputWrapper>
            <DraggableWrapper>
                <DragDropContext onDragEnd={onDragEnd}>
                    {columns.map((column: columnItem) => (
                        <Column key={column.id} columnItem={column} />
                    ))}
                </DragDropContext>
            </DraggableWrapper>
        </Container>
    );
};

export default Main;
