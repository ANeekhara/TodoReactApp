export class TaskData {
    id?: number | undefined;
    title: string | undefined;
    description: string | undefined;
    dueDate: string | undefined;
}

export class SubTaskData {
    subTaskId?: number | undefined;
    taskId?: number | undefined;
    text: string | undefined;
}

export interface ModalHandle {
    open: () => void;

}

