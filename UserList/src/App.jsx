import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import UserValue from "./components/Uservalue";
import UserList from "./components/UserList";

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

  console.log(User);
  return (
    <main>
      <header>
        <h1 className="text-center text-3xl">Gerenciador de Usuarios</h1>
      </header>
      <section className="bg-gray-300">
        <UserValue newUserAdd={newUserAdd} />
      </section>
      <section>
        <UserList User={User} />
      </section>
    </main>
  );
}

export default App;
