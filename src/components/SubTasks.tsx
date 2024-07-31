import React from "react";
import NewSubTask from "./NewSubTask";
import { SubTaskData } from "../types/TaskTypes";

interface SubTasksProps {
    OnAddSubTask: (enteredTask: string) => void;
    OnDeleteSubTask: (subTaskId: number) => void;
    SubTasksData: SubTaskData[];
}

const SubTasks: React.FC<SubTasksProps> = ({ OnAddSubTask, OnDeleteSubTask, SubTasksData }) => {
    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Sub Tasks</h2>
            <NewSubTask
                OnAddSubTask={OnAddSubTask}
            />
            {SubTasksData.length == 0 && <p className="text-stone-800 my-4">This Task list does not have any sub tasks</p>}
            {SubTasksData.length > 0 &&
                <ul className="p-4 mt-8 rounded-md bg-stone-100">
                    {SubTasksData.map((task) => (
                        <li key={task.subTaskId} className="flex justify-between my-4 gap-4">
                            <span>{task.text}</span>
                            <button className="text-stone-700 hover:text-red-500"
                                onClick={() => OnDeleteSubTask(task.subTaskId ?? 0)}>
                                Clear</button>
                        </li>
                    ))}
                </ul>}
        </section >
    )
}

export default SubTasks;