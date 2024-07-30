import { useRef } from "react";
import Input from "./Input";
import { ModalHandle, TaskData } from '../types/TaskTypes.ts';
import Modal from "./Modal.tsx";

interface NewTaskProps {
    onAdd: (taskData: TaskData) => void;
    onCancel: () => void;
}
const NewTask: React.FC<NewTaskProps> = ({ onAdd, onCancel }) => {

    const titleref = useRef<HTMLInputElement>(null);
    const descriptionref = useRef<HTMLTextAreaElement>(null);
    const duedateref = useRef<HTMLInputElement>(null);
    const modalref = useRef<ModalHandle>(null);

    function handleSave() {
        const enteredTitle = titleref?.current?.value;
        const enteredDescription = descriptionref?.current?.value;
        const enteredDuedate = duedateref?.current?.value;

        //validation
        if (enteredTitle?.trim() === '' || enteredDescription?.trim() === '' || enteredDuedate?.trim() === '') {
            modalref.current?.open();
            return;
        }
        const taskData: TaskData = { title: enteredTitle, description: enteredDescription, dueDate: enteredDuedate };
        onAdd(taskData);
    }

    return (
        <>
            <Modal ref={modalref}>
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className="text-stone-600 mb-4">Please enter a  valid value.</p></Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex justify-end my-4 gap-4">
                    <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>
                        Cancel
                    </button>
                    <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                        onClick={handleSave}>
                        Save
                    </button>
                </menu>
                <div>
                    <Input ref={titleref} label="Title" textArea={false} />
                    <Input ref={descriptionref} label="Description" textArea />
                    <Input type="date" ref={duedateref} label="Due Date" textArea={false} />
                </div>
            </div>
        </>
    )
}
export default NewTask; 