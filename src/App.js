import './App.css';
import { useState, useEffect } from 'react';
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs";

const API = "http://localhost:5000";

function App() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      const res = await fetch(API + "/todos")
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => console.log(err));

      setLoading(false);
      setTodos(res);
    };

    loadData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const todo = {
      id: Math.random(),
      title,
      time,
      done: false,
    };

    await fetch(API + "/todos", {
      method: "POST",
      body: JSON.stringify(todo),
      headers: {
        "Content-type": "application/json",
      },
    });

    setTodos((prevState) => [...prevState, todo]);

    setTitle("");
    setTime("");
  };

  const handleRemove = async (id) => {
    await fetch(API + "/todos/" + id, {
      method: "DELETE",
    });

    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  const handleToggleDone = async (todo) => {
    const updatedTodo = { ...todo, done: !todo.done };

    await fetch(API + "/todos/" + todo.id, {
      method: "PUT",
      body: JSON.stringify(updatedTodo),
      headers: {
        "Content-type": "application/json",
      },
    });

    setTodos((prevState) =>
      prevState.map((t) => (t.id === todo.id ? updatedTodo : t))
    );
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="App">
      <div className="todo-header">
        <h1>Gerenciador de tarefas</h1>
      </div>

      <div className="form-todo">
        <h2>Insira a sua próxima tarefa:</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="form-group">
              <label htmlFor="title">Tarefa:</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Título da tarefa"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="time">Duração:</label>
              <input
                type="text"
                id="time"
                name="time"
                placeholder="Tempo estimado (em horas)"
                onChange={(e) => setTime(e.target.value)}
                value={time}
                required
              />
            </div>
          </div>
          <div className="button-container">
            <input type="submit" value="Criar tarefa" />
          </div>
        </form>
      </div>

      <div className="list-todo">
        <h2>Lista de tarefas:</h2>
        {todos.length === 0 && <p>Não há tarefas cadastradas!</p>}
        {todos.map((todo) => (
          <div className="todo" key={todo.id}>
          <h3 className={todo.done ? "todo-done" : ""}>{todo.title}</h3>
          <p>Duração: {todo.time}</p>
          <div className="actions">
            <BsBookmarkCheck onClick={() => handleToggleDone(todo)} />  
            <BsTrash onClick={() => handleRemove(todo.id)} />           
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default App;
