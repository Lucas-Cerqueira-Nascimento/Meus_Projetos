import { useNavigate } from "react-router";

function UserList({ User }) {
  //   console.log(User);
  const navigate = useNavigate();
  function setQueryOnUser(user) {
    const query = new URLSearchParams();
    query.set("Nome", user.nome);
    query.set("Idade", user.idade);
    query.set("Sexo", user.sexo);
    navigate(`/User?${query.toString()}`);
  }

  return (
    <ul className="userList">
      {User.map((user) => (
        <li className="lists" key={user.id} title={`idade: ${user.idade}`}>
          <button onClick={() => setQueryOnUser(user)}>{user.nome}</button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
