import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import UserValue from "./components/Uservalue";
import UserList from "./components/UserList";
import { TrashIcon } from "lucide-react";

function App() {
  const [User, setUser] = useState(
    JSON.parse(localStorage.getItem("Users")) || []
  );

  //  LocalStorage
  useEffect(() => {
    localStorage.setItem("Users", JSON.stringify(User));
  }, [User]);
  // newUser on User
  function newUserAdd(nome, idade, sexo) {
    const newUser = {
      id: uuidv4(),
      nome,
      idade,
      sexo,
    };

    setUser([...User, newUser]);
  }

  // console.log(User);
  function onDeleteUserClick() {
    User.map((a) => a && setUser([]));
  }
  return (
    <main>
      <header>
        <h1 className="text-center text-3xl">Gerenciador de Usuarios</h1>
      </header>
      <section className="bg-gray-300 ">
        <UserValue newUserAdd={newUserAdd} />
      </section>
      <section className="relative">
        <UserList User={User} />
        <button onClick={() => onDeleteUserClick()}>
          <TrashIcon className="TrashIcon absolute" />
        </button>
      </section>
    </main>
  );
}

export default App;
