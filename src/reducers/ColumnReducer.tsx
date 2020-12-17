import { columnItem, taskItem } from "../Views/Main";

export type ColumnReducerActionsType =
    | {
          type: 'ADD_TASK';
          task: {
              id: string;
              title: string;
              content: string;
          };
      }
    | {
          type: 'REMOVE_TASK';
          id: string;
      };

export const ColumnReducer = (state: columnItem[], action: ColumnReducerActionsType) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, action.task];
        case 'REMOVE_TASK':
            if(state.length > 0) {
                return state.map((column: columnItem) => column.tasks.filter((task: taskItem) => task.id !== action.id));
            } else {
                return state;
            }
        default:
            return state;
    }
}
