import {useReducer} from 'react';
import AddTask from './tasks/AddTask.tsx';
import TaskList from './tasks/TaskList.tsx';
import tasksReducer from './tasks/TaskReducer.tsx';
import Task from './model/Task.tsx';
import {TaskActionType} from './model/actions/TaskAction.tsx';

import './App.css'


function App() {
    const [tasks, dispatch] = useReducer(
        tasksReducer,
        initialTasks
    );

    function handleAddTask(text: string) {
        dispatch({
            type: TaskActionType.ADD,
            task: {
                id: nextId++,
                text: text,
                done: false
            }
        });
    }

    function handleChangeTask(task: Task) {
        dispatch({
            type: TaskActionType.UPDATE,
            task: task
        });
    }

    function handleDeleteTask(taskId: number) {
        dispatch({
            type: TaskActionType.DELETE,
            task: {id: taskId, text: '', done: false}
        });
    }

    return (
        <>
            <h1>Day off in Kyoto</h1>
            <AddTask
                onAddTask={handleAddTask}
            />
            <TaskList
                tasks={tasks}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}
            />
        </>
    )
}

let nextId = 3;
const initialTasks = [
    {id: 0, text: 'Philosopher’s Path', done: true},
    {id: 1, text: 'Visit the temple', done: false},
    {id: 2, text: 'Drink matcha', done: false}
];

export default App
