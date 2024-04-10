import {useState} from 'react';
import Task from '../model/Task.tsx';

interface TaskListProps {
    tasks: Task[];
    onChangeTask: (task: Task) => void;
    onDeleteTask: (taskId: number) => void;
}

export default function TaskList(props: TaskListProps) {
    return (
        <ul>
            {props.tasks.map(task => (
                <li key={task.id}>
                    <TaskItem
                        task={task}
                        onChange={props.onChangeTask}
                        onDelete={props.onDeleteTask}
                    />
                </li>
            ))}
        </ul>
    );
}

interface TaskItemProps {
    task: Task;
    onChange: (task: Task) => void;
    onDelete: (taskId: number) => void;
}

function TaskItem(props: TaskItemProps) {
    const [isEditing, setIsEditing] = useState(false);
    let taskContent;
    if (isEditing) {
        taskContent = (
            <>
                <input
                    value={props.task.text}
                    onChange={e => {
                        props.onChange({
                            ...props.task,
                            text: e.target.value
                        });
                    }}/>
                <button onClick={() => setIsEditing(false)}>
                    Save
                </button>
            </>
        );
    } else {
        taskContent = (
            <>
                {props.task.text}
                <button onClick={() => setIsEditing(true)}>
                    Edit
                </button>
            </>
        );
    }
    return (
        <label>
            <input
                type="checkbox"
                checked={props.task.done}
                onChange={e => {
                    props.onChange({
                        ...props.task,
                        done: e.target.checked
                    });
                }}
            />
            {taskContent}
            <button onClick={() => props.onDelete(props.task.id)}>
                Delete
            </button>
        </label>
    );
}
