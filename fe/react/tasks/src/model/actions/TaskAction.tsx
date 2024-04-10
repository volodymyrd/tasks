import Task from '../Task.tsx';

export enum TaskActionType {
    ADD, UPDATE, DELETE
}

export interface TaskAction {
    type: TaskActionType;
    task: Task;
}
