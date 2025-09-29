import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";
import "./App.css";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // useEffect(() => {
  //   async function onFetchTask() {
  //     const res = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos?_limit=5"
  //     );

  //     const data = await res.json();

  //     setTasks(data); //Altera o state colocando a api
  //   }

  //   onFetchTask();
  // }, []);

  function onTaskSubmit(title, description) {
    const newTask = {
      id: uuidv4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]); // acrescenta uma nova task
  }

  function onTaskClick(taskId) {
    const newTask = tasks.map((task) => {
      if (taskId === task.id) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTask);
  }

  function onDeleteTask(taskId) {
    const DeleteTasks = tasks.filter((task) => taskId !== task.id);
    // console.log(DeleteTasks);
    setTasks(DeleteTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center title">
          Gerenciador de Tasks
        </h1>
        <AddTasks onTaskSubmit={onTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          DeleteTasks={onDeleteTask}
        />
      </div>
    </div>
  );
}

export default App;
