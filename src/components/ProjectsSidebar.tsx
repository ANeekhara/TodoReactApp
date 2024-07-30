import { TaskData } from "../types/TaskTypes";
import Button from "./Button";

interface ProjectSideBarProps {
    onStartAddTask: () => void; // Function with no arguments and no return value
    tasks: TaskData[];
    OnSelectTask: (taskId: number) => void;
    selectedTaskId: number
}

const ProjectsSidebar: React.FC<ProjectSideBarProps> = ({ onStartAddTask, tasks, OnSelectTask, selectedTaskId }) => {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Tasks</h2>
            <div>
                <Button onClick={onStartAddTask}>+ Add Task</Button>
            </div>
            <ul className="mt-8">
                {tasks.map(task => {
                    let cssClasses = "w-full text-left px-2 my-1 py-2 rounded-sm hover:text-stone-200 hover:bg-stone-800";
                    if (task.id == selectedTaskId) {
                        cssClasses += 'bg-stone-800 text-stone-200';
                    } else {
                        cssClasses += 'bg-stone-800 text-stone-400';
                    }
                    return (<li key={task.id}>
                        <button
                            className={cssClasses}
                            onClick={() => OnSelectTask(task.id ?? 0)}>
                            {task.title}</button>
                    </li>)
                }
                )}
            </ul>
        </aside>);
};

export default ProjectsSidebar;