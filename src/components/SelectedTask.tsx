import { SubTaskData, TaskData } from "../types/TaskTypes";
import SubTasks from "./SubTasks";



interface SelectedTaskProps {
    task: TaskData;
    OnTaskDelete: () => void;
    OnAddSubTask: (enteredTask: string) => void;
    OnDeleteSubTask: (subTaskId: number) => void;
    SubTasksData: SubTaskData[];
}

const SelectedTask: React.FC<SelectedTaskProps> = ({ task, OnTaskDelete, OnAddSubTask, OnDeleteSubTask, SubTasksData }) => {
    const formattedDate = new Date(task.dueDate ?? "").toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    return (
        <div className="W-[50rem] mt-10">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex gap-40">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">{task.title}</h1>
                    <button className="text-slate-600 hover:text-stone-950" onClick={OnTaskDelete}>Delete</button>
                </div>
                <p className="mb-4 text-stone-400">{formattedDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{task.description}</p>
            </header>
            <SubTasks
                OnAddSubTask={OnAddSubTask}
                OnDeleteSubTask={OnDeleteSubTask}
                SubTasksData={SubTasksData} />
        </div>
    )
}

export default SelectedTask;
