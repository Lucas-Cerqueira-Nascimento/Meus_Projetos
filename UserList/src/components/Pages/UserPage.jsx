import { ChevronLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router";
function UserPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const nome = searchParams.get("Nome");
  const idade = searchParams.get("Idade");
  const sexo = searchParams.get("Sexo");
  return (
    <div className="bg-blue-300 w-screen h-screen flex  justify-start items-center flex-col text-center relative">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-2 left-2 border rounded-md px-2 py-2 bg-slate-200 w-[30px] h-[30px]"
      >
        <ChevronLeft />
      </button>
      <h1 className="text-3xl flex">Descrição do Usuario</h1>
      <ul className="bg-sky-200 w-[300px] h-[200px] UserPage">
        <li>Nome: {nome}</li>
        <li>Idade: {idade}</li>
        <li>Sexo: {sexo}</li>
      </ul>
    </div>
  );
}

export default UserPage;
