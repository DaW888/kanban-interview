import { v4 as uuid4 } from 'uuid';

export default
    // tasks: {
    //     task1: { id: 'task1', content: 'Ic1' },
    //     task2: { id: 'task2', content: 'Ic2' },
    //     task3: { id: 'task3', content: 'Ic3' },
    //     task4: { id: 'task4', content: 'Ic4' },
    //     task5: { id: 'task5', content: 'Ic5' },
    //     task6: { id: 'task6', content: 'Ic6' },
    // },
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
        // inProgress: { id: 'inProgress', title: 'To Do', tasks: [] },
        // done: { id: 'done', title: 'Done', tasks: [] },
    ];
    // columnOrder: ['toDo'],

