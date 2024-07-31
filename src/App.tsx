import { useState } from 'react'
import ProjectsSidebar from './components/ProjectsSidebar.tsx';

import './App.css'
import NewTask from './components/NewTask.tsx';
import NoTaskSelected from './components/NoTasksSelected.tsx';
import { SubTaskData, TaskData } from './types/TaskTypes.ts';
import SelectedTask from './components/SelectedTask.tsx';


interface TaskState {
  selectedTaskId: number | undefined | null;
  tasks: TaskData[];
  subTasks: SubTaskData[];
}

function App() {
  const [taskState, setTaskState] = useState<TaskState>({
    selectedTaskId: undefined,
    tasks: [],
    subTasks: []
  });


  function handleAddSubTask(task: string) {
    setTaskState(prevState => {
      const newSubTask: SubTaskData = {
        text: task,
        taskId: prevState.selectedTaskId ?? 0,
        subTaskId: Math.random()
      };
      return {
        ...prevState,
        subTasks: [...prevState.subTasks, newSubTask]
      };
    });
  }

  function handleDeleteSubTask(subTaskId: number) {
    setTaskState(prevState => {
      return {
        ...prevState,
        subTasks: prevState.subTasks.filter((task) => task.subTaskId !== subTaskId)
      };
    });
  }
  function handleStartAddTask() {
    setTaskState(prevState => {
      return {
        ...prevState,
        selectedTaskId: null,
      };
    });
  }

  function handleAddTask(taskData: TaskData) {
    setTaskState(prevState => {
      const newTask = {
        ...taskData,
        id: Math.random()
      };
      return {
        ...prevState,
        selectedTaskId: undefined,
        tasks: [...prevState.tasks, newTask]
      }
    })
  }


  function handleCancelProject() {
    setTaskState(prevState => {
      return {
        ...prevState,
        selectedTaskId: undefined,
      };
    });
  }


  function handleSelectTask(taskId: number) {
    setTaskState(prevState => {
      return {
        ...prevState,
        selectedTaskId: taskId,
      };
    });
  }

  function handleTaskDelete() {
    setTaskState(prevState => {
      return {
        ...prevState,
        selectedTaskId: undefined,
        tasks: prevState.tasks.filter((task) => task.id !== prevState.selectedTaskId)
      };
    });
  }


  const selectedTask = taskState.tasks.find(task => task.id == taskState.selectedTaskId) ?? new TaskData;
  let content = (
    <SelectedTask
      task={selectedTask}
      OnTaskDelete={handleTaskDelete}
      OnAddSubTask={handleAddSubTask}
      OnDeleteSubTask={handleDeleteSubTask}
      SubTasksData={taskState.subTasks} />)

  if (taskState.selectedTaskId === null) {
    content = <NewTask onAdd={handleAddTask} onCancel={handleCancelProject} />
  } else if (taskState.selectedTaskId === undefined) {
    content = <NoTaskSelected onStartAddTask={handleStartAddTask} />
  }


  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectsSidebar onStartAddTask={handleStartAddTask}
        tasks={taskState.tasks}
        OnSelectTask={handleSelectTask}
        selectedTaskId={taskState?.selectedTaskId ?? 0} />
      {content}
    </main>
  )
}

export default App
