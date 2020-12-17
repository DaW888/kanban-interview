import React, { FC } from 'react';
import { GlobalStyle } from './Styled/GlobalStyle';
import Main from './Views/Main';
import ColumnContextProvider from "./contexts/ColumnContext";

const App: FC = () => {
    return (
        <>
            <GlobalStyle />
            <ColumnContextProvider>
                <Main />
            </ColumnContextProvider>
        </>
    );
};

export default App;
