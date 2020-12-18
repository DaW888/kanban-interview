import styled from 'styled-components';
import COLORS from '../CONSTS/COLORS';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    width: 100vw;
    min-height: 100vh;
    background-color: ${COLORS.background};
`;

export const DraggableWrapper = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    flex-wrap: wrap;
`;

export const InputWrapper = styled.form`
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
        margin-top: 2em;
        width: 80vw;
        max-width: 360px;
    }
`;

export const InputTextElement = styled.input`
    border: 0;
    margin: 4px;
    padding: 12px;
    font-size: 1.2em;
    border-radius: 8px;
    background: ${COLORS.dark};
    color: ${COLORS.lightText};
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
`;
export const InputSubmitButton = styled.input`
    border: 0;
    margin: 10px 4px 10px 4px;
    padding: 8px;
    font-size: 1.1em;
    font-weight: bold;
    border-radius: 8px;
    background: ${COLORS.orange};
    color: ${COLORS.lightText};
    cursor: pointer;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

    @media (max-width: 768px) {
        padding: 12px;
    }
`;

export const ColumnContainer = styled.div`
    flex-direction: column;
    border-radius: 16px;
    min-width: 240px;
    max-width: 300px;
    width: 25vw;
    margin: 1.6rem;
    @media (max-width: 768px) {
        width: 80vw;
        max-width: 360px;
    }
`;
export const ColumnTitle = styled.h3`
    background-color: ${COLORS.blue};
    border-radius: 8px;
    width: 100%;
    text-align: center;
    padding: 12px 0 12px 0;
    color: ${COLORS.lightText};
    margin: 0 0 6px 0;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
`;
export const TaskList = styled.div`
    padding: 4px;
    background: ${COLORS.dark};
    border-radius: 16px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

    max-height: 60vh;
    overflow: auto;
    min-height: 60vh;

    &::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 768px) {
        min-height: 30vh;
    }

    scrollbar-width: none;
`;

export const TaskContainer = styled.div`
    background: ${COLORS.white};
    padding: 14px;
    margin: 8px 4px 8px 4px;
    border-radius: 8px;
    box-shadow: 2px 2px 8px rgba(111, 111, 111, 0.1);
`;

export const TitleTask = styled.h4`
    font-size: 1.1em;
    margin: 2px 0 6px 0;
    padding: 2px;
    color: ${COLORS.titleText};
`;

export const ParagraphTask = styled.p`
    margin: 0;
    padding: 2px;
    color: ${COLORS.darkText};
`;
