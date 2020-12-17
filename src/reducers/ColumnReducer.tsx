import { columnItem, taskItem } from '../Views/Main';
import { v4 as uuid4 } from 'uuid';

export type ColumnReducerActionsType =
    | {
          type: 'ADD_TASK';
          task: {
              title: string;
              content: string;
          };
      }
    | {
          type: 'REMOVE_TASK';
          columnId: string;
          taskId: string;
      }
    | {
          type: 'UPDATE_COLUMNS';
          columns: columnItem[];
      };

export const ColumnReducer = (state: columnItem[], action: ColumnReducerActionsType) => {
    switch (action.type) {
        case 'ADD_TASK':
            const firstColumn: columnItem = state[0];
            firstColumn.tasks.push({ id: uuid4(), content: action.task.content, title: action.task.title });
            return state.map((column) => (column.id === firstColumn.id ? firstColumn : column));

        case 'REMOVE_TASK':
            const newColumn: columnItem = state.find((column: columnItem) => column.id === action.columnId);
            const tasks: taskItem[] = newColumn.tasks.filter((task: taskItem) => task.id !== action.taskId);
            newColumn.tasks = tasks;
            return state.map((column) => (column.id === newColumn.id ? newColumn : column));

        case 'UPDATE_COLUMNS':
            return action.columns;

        default:
            return state;

    }
};
