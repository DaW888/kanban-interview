import React, { createContext, useReducer } from 'react';
import { useEffect } from 'react';
import { columnItem } from '../Views/Main';
import { ColumnReducer, ColumnReducerActionsType } from "../reducers/ColumnReducer";
import DATA from "../CONSTS/DATA";

type childrenProps = {
    children: React.ReactNode;
};

type ContextType = {
    columns: columnItem[];
    dispatch: React.Dispatch<ColumnReducerActionsType>;
};

export const ColumnContext = createContext<ContextType>({
    columns: [],
    dispatch: (): void => {},
});

const ColumnContextProvider = ({ children }: childrenProps) => {
    // @ts-ignore
    const [columns, dispatch] = useReducer(ColumnReducer, [], () => {
        const localColumns = localStorage.getItem('columns');
        return localColumns ? JSON.parse(localColumns): DATA;
    });

    useEffect(() => {
        console.log(columns, dispatch);
        localStorage.setItem('columns', JSON.stringify(columns));
    }, [columns]);

    return <ColumnContext.Provider value={{ columns, dispatch }}>{children}</ColumnContext.Provider>;
};

export default ColumnContextProvider;