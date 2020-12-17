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
    const chooseColumnById = (colId: string): columnItem => {
        const colItem = columns.find((el) => el.id === colId);
        if (colItem) {
            return colItem;
        } else {
            return { id: '', title: '', tasks: [] };
        }
    };

    const chooseTaskById = (taskId: string, taskList: taskItem[]): number => {
        return taskList.findIndex((el) => el.id === taskId);
    };

    const column: columnItem = chooseColumnById('toDo');

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
        console.log(source.droppableId);
        const column: columnItem = chooseColumnById(source.droppableId);
        const newTaskList: taskItem[] = reorder(column.tasks, source.index, destination.index);
        // const taskIdInt: number = chooseTaskById(draggableId, newTaskList);
        // newTaskList.splice(source.index, 1);
        // newTaskList.splice(destination.index,0, newTaskList[taskIdInt]);

        const newColumn = {
            ...column,
            tasks: newTaskList,
        };
        console.log(newTaskList);
        const newData = columns.map((column) => (column.id === newColumn.id ? newColumn : column));
        setColumns(newData);
    };

    // const {columns} = useContext(ColumnContext);
    // console.log('context');
    // console.log(columns);

    return (
        <Container>
            <DragDropContext onDragEnd={onDragEnd}>
                <Column key={column.id} columnItem={column} />
            </DragDropContext>
        </Container>
    );
};

export default Main;
