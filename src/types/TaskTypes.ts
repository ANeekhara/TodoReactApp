export class TaskData {
    id?: number | undefined;
    title: string | undefined;
    description: string | undefined;
    dueDate: string | undefined;
}

export interface ModalHandle {
    open: () => void;

}

