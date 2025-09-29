import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams } from "react-router";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title"); // Pega o Query
  const description = searchParams.get("description");
  return (
    <div className="w-screen h-screen bg-slate-500 p-6">
      <h1 className="flex justify-center text-3xl text-slate-100 font-bold text-center title">
        <ChevronLeftIcon />
        Detalhes da tarefa
      </h1>
      <div className="text-left bg-slate-400 w-full text-white p-2 rounded-md lists">
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow border">
          <h2 className="text-slate-700 text-2xl">{title}</h2>
          <p className="text-slate-700">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
