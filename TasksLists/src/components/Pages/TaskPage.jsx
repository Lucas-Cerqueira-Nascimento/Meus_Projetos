import { useSearchParams } from "react-router";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title"); // Pega o Query
  const description = searchParams.get("description");
  return (
    <div className="w-screen h-screen bg-slate-500 p-6">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default TaskPage;
