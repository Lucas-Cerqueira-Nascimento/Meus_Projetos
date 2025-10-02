import UserValue from "./components/Uservalue";

// Função do UserValue!

function App() {
  return (
    <main>
      <header>
        <h1 className="text-center text-3xl">Gerenciador de Usuarios</h1>
      </header>
      <section className="bg-gray-300">
        <UserValue />
      </section>
      <section>listUsuarios</section>
    </main>
  );
}

export default App;
