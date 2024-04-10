import {useState} from 'react';

export interface AddTaskProps {
    onAddTask: (text: string) => void;
}

export default function AddTask(props: AddTaskProps) {
    const [text, setText] = useState('');
    return (
        <>
            <input
                placeholder="Add task"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button onClick={() => {
                setText('');
                props.onAddTask(text);
            }}>Add
            </button>
        </>
    )
}
