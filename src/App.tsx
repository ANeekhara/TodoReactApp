import { useState } from 'react'
import ProjectsSidebar from './components/ProjectsSidebar.tsx';

import './App.css'
import NewTask from './components/NewTask.tsx';
import NoTaskSelected from './components/NoTasksSelected.tsx';
import { TaskData } from './types/TaskTypes.ts';
import SelectedTask from './components/SelectedTask.tsx';


interface TaskState {
  selectedTaskId: number | undefined | null;
  tasks: TaskData[];
}

function App() {
  const [taskState, setTaskState] = useState<TaskState>({
    selectedTaskId: undefined,
    tasks: []
  });

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

  function handleTaskDelete(taskId: number) {

    const index = taskState.tasks.findIndex(task => task.id == taskId);

    // If the item is found, remove it from the array
    if (index !== -1) {
      taskState.tasks.splice(index, 1);
    }
    setTaskState(prevState => {
      return {
        ...prevState,
        selectedTaskId: taskId,
      };
    });
  }


  const selectedTask = taskState.tasks.find(task => task.id == taskState.selectedTaskId) ?? new TaskData;
  let content = <SelectedTask task={selectedTask} OnTaskDelete={handleTaskDelete} />;
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
