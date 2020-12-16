import React, { FC } from 'react';
import Main from './Views/Main';
import { GlobalStyle } from './Styled/GlobalStyle';

const App: FC = () => {
    return (
        <>
            <GlobalStyle />
            <Main />
        </>
    );
};

export default App;
