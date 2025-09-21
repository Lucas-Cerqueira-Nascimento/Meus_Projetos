import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router";
function Tasks({ tasks, onTaskClick, DeleteTasks }) {
  //   console.log(props.tasks[0].title);

  const navigate = useNavigate();
  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title); //cria o query
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`); //Guia aonde sera a URL
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow border">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`text-left bg-slate-400 w-full text-white p-2 rounded-md lists ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <button
            onClick={() => onSeeDetailsClick(task)}
            className="bg-slate-400 p-2 rounded-md text-white"
          >
            {<ChevronRightIcon />}
          </button>
          <button
            onClick={() => DeleteTasks(task.id)}
            className=" bg-slate-400 p-2 rounded-md text-white trash"
          >
            {<TrashIcon />}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
