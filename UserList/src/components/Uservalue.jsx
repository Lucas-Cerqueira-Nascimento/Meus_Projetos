import { useState } from "react";

function UserValue() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [opcaoSelecionada, setOpcaoSelecionada] = useState("M");
  return (
    <div className="flexUser bg-gray-200">
      <label htmlFor="Nome">Nome:</label>
      <input
        className="text-center outline-2 rounded-md"
        type="text"
        id="Nome"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="Idade">Idade:</label>
      <input
        type="range"
        id="Idade"
        placeholder="Idade"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <label htmlFor="Sexo">Sexo:</label>
      <label htmlFor="Masc">
        M
        <input
          type="radio"
          id="Masc"
          name="Sex"
          placeholder="Sexo"
          value="M"
          checked={opcaoSelecionada === "M"}
          onChange={(e) => setOpcaoSelecionada(e.target.value)}
        />
      </label>

      <label htmlFor="Femi">
        F
        <input
          type="radio"
          id="Sexo"
          name="Sex"
          placeholder="Sexo"
          value="F"
          checked={opcaoSelecionada === "F"}
          onChange={(e) => setOpcaoSelecionada(e.target.value)}
        />
      </label>

      <button
        onClick={() => {
          console.log(name);
          console.log(age);
          console.log(opcaoSelecionada);
          setName("");
        }}
        className="bg-slate-500 text-white w-[100px] rounded-sm"
      >
        Salvar!
      </button>
    </div>
  );
}

export default UserValue;
