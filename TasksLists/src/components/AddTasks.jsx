import { useState } from "react";
import Input from "./input";

function AddTasks({ onTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col border">
      <Input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha as lacunas");
          } else {
            onTaskSubmit(title, description);
          }

          setTitle("");
          setDescription("");
        }}
        className="bg-slate-400 rounded-md border p-2 border-gray-500"
      >
        Salvar!
      </button>
    </div>
  );
}

export default AddTasks;
