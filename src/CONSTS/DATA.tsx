import { v4 as uuid4 } from 'uuid';

export default
    [
        {
            id: 'toDo',
            title: 'To Do',
            tasks: [
                { id: uuid4(), content: 'raz', title: 'tyt1' },
                { id: uuid4(), content: 'dwa', title: 'tyt2' },
                { id: uuid4(), content: 'trzy', title: 'tyt3' },
                { id: uuid4(), content: 'cztery', title: 'tyt4' },
                { id: uuid4(), content: 'piec', title: 'tyt5' },
                { id: uuid4(), content: 'szesc', title: 'tyt6' },
            ],
        },
        {
            id: 'inProgress',
            title: 'In Progress',
            tasks: [
                { id: uuid4(), content: 'raz', title: 'tyt1' },
                { id: uuid4(), content: 'dwa', title: 'tyt2' },
                { id: uuid4(), content: 'trzy', title: 'tyt3' },
                { id: uuid4(), content: 'cztery', title: 'tyt4' },
                { id: uuid4(), content: 'piec', title: 'tyt5' },
                { id: uuid4(), content: 'szesc', title: 'tyt6' },
            ],
        },
        {
            id: 'done',
            title: 'Done',
            tasks: [
                { id: uuid4(), content: 'raz', title: 'tyt1' },
                { id: uuid4(), content: 'dwa', title: 'tyt2' },
                { id: uuid4(), content: 'trzy', title: 'tyt3' },
                { id: uuid4(), content: 'cztery', title: 'tyt4' },
                { id: uuid4(), content: 'piec', title: 'tyt5' },
                { id: uuid4(), content: 'szesc', title: 'tyt6' },
            ],
        },
    ];

