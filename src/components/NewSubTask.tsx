import { useState } from "react";


interface NewSubTaskProps {
    OnAddSubTask: (enteredTask: string) => void
}

const NewSubTask: React.FC<NewSubTaskProps> = ({ OnAddSubTask }) => {
    const [enteredTask, setEnetredTask] = useState('');

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setEnetredTask(event.target.value);
    }

    function hanldeClick() {
        setEnetredTask('');
        OnAddSubTask(enteredTask);
    }
    return (
        <div className="flex items-center gap-4">
            <input type="text"
                className="w-64 px-2 py-1 rounded-sm bg-stone-200"
                value={enteredTask}
                onChange={handleChange} />
            <button className="text-stone-700 hover:text-stone-800  mb-4"
                onClick={hanldeClick}
            > Add Sub Task</button>
        </div>
    )
}
export default NewSubTask;