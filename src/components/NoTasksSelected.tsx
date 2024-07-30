import React from "react";
import noTaskImage from '../assets/no-projects.png';
import Button from "./Button";


interface NoProjectSelectedProps {
    onStartAddTask: () => void; // Function with no arguments and no return value
}

const NoTaskSelected: React.FC<NoProjectSelectedProps> = ({ onStartAddTask }) => {
    return (<div className="mt-24 text-center w-2/3">
        <img src={noTaskImage} alt="empty task list" className="w-16 h-16 object-contain mx-auto" />
        <h2 className="text-xl font-bold text-stone-500 my-4"> No Tasks available</h2>
        <p className="text-stone-400 mb-4"> Select a task or create a new one</p>
        <p className="mt-8">
            <Button onClick={onStartAddTask}>Create a new Task</Button>
        </p>
    </div>)
}
export default NoTaskSelected;