import Task from '../model/Task.tsx';
import {TaskAction, TaskActionType} from '../model/actions/TaskAction.tsx';

function tasksReducer(tasks: Task[], action: TaskAction): Task[] {
    switch (action.type) {
        case TaskActionType.ADD: {
            return [...tasks, {
                id: action.task.id,
                text: action.task.text,
                done: false
            }];
        }
        case TaskActionType.UPDATE: {
            return tasks.map(t => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            });
        }
        case TaskActionType.DELETE: {
            return tasks.filter(t => t.id !== action.task.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

export default tasksReducer;
