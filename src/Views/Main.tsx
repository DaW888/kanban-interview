import React, { FC, useContext, useState } from 'react';
import { Container } from '../Styled/Main';
import DATA from '../CONSTS/DATA';
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
    const [columns, setColumns] = useState<columnItem[]>(DATA);
    const [inputContent, setInputContent] = useState<string>('');

    const chooseColumnById = (colId: string): columnItem => {
        const colItem = columns.find((el) => el.id === colId);
        if (colItem) {
            return colItem;
        } else {
            return { id: '', title: '', tasks: [] };
        }
    };
    
    const updateSameColumn = (column: columnItem, taskList: taskItem[]): columnItem[] => {
        const newColumn = {
            ...column,
            tasks: taskList,
        };
        console.log(taskList);
        return columns.map((column) => (column.id === newColumn.id ? newColumn : column));
    };

    const updateDifferentColumns = (
        startColumn: columnItem,
        finishColumn: columnItem,
        sourceIndex: number,
        destinationIndex: number
    ): columnItem[]  => {
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
        console.log(result);
        const { destination, source, draggableId }: dropResType = result;

        if (!destination) return;
        if (destination.droppableId === source.droppableId && destination.index === source.index) return;

        const startColumn = chooseColumnById(source.droppableId);
        const finishColumn = chooseColumnById(destination.droppableId);

        if (startColumn === finishColumn) {
            const column: columnItem = chooseColumnById(source.droppableId);
            const newTaskList: taskItem[] = reorder(column.tasks, source.index, destination.index);
            setColumns(updateSameColumn(column, newTaskList));
        } else {
            setColumns(updateDifferentColumns(startColumn, finishColumn, source.index, destination.index));
        }

    };

    // const {columns} = useContext(ColumnContext);
    // console.log('context');
    // console.log(columns);

    return (
        <Container>
            <input
                type="text"
                value={inputContent}
                onChange={(e) => setInputContent(e.target.value)}
                placeholder="content"
            />
            <DragDropContext onDragEnd={onDragEnd}>
                {columns.map((column: columnItem) => (
                    <Column key={column.id} columnItem={column} />
                ))}
            </DragDropContext>
        </Container>
    );
};

export default Main;
