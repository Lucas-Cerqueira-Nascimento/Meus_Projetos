import { useState } from "react";

function UserValue({ newUserAdd }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [opcaoSelecionada, setOpcaoSelecionada] = useState("");
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
      <label htmlFor="Idade">Idade: {age}</label>
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
          if (!name.trim() || !age.trim() || !opcaoSelecionada) {
            alert("Preencha os campo campos que estão faltando");
          } else {
            newUserAdd(name, age, opcaoSelecionada);
            setName("");
            setAge("50");
            setOpcaoSelecionada("");
          }
        }}
        className="bg-slate-500 text-white w-[100px] rounded-sm save"
      >
        Salvar!
      </button>
    </div>
  );
}

export default UserValue;
