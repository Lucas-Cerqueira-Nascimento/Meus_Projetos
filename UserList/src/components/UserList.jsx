function UserList({ User }) {
  //   console.log(User);
  return (
    <ul className="userList">
      {User.map((user) => (
        <li key={user.id} title={`idade: ${user.idade}`}>
          <button onClick={() => console.log("tes")}>{user.nome}</button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
