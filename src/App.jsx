import { useEffect, useState } from "react";
import styles from "./App.module.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
const BASE_URL = "http://localhost:3333/tasks/";

/**
 * Renders the whole application.
 * Lists all tasks and allows the user to create new ones.
 * @returns {JSX.Element}
 */
function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //Hook
  useEffect(() => {
    setIsLoading(true);
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
      });
    setIsLoading(false);
  }, []);

  async function handleSubmit(task) {
    const res = await fetch(BASE_URL, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ ...task, isDone: false }),
    });

    const data = await res.json();

    setTasks([...tasks, data]);
  }

  async function handleCheckChange(id, checkedValue) {
    //Fazendo o Optimistic UI
    try {
      const newTasks = tasks.map((task) =>
        task.id === id ? { ...task, isDone: checkedValue } : task
      );
      setTasks(newTasks);

      await fetch(BASE_URL + id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isDone: checkedValue }),
      });
    } catch (error) {
      const newTasks = tasks.map((task) =>
        item.id === id ? { ...task, isDone: !checkedValue } : task
      );
      setTasks(newTasks);
      alert(error);
    }
  }

  async function handleDelete(id) {
    await fetch(BASE_URL + id, {
      method: "DELETE",
    });
    const newTasks = tasks.filter((item) => item.id !== id);
    setTasks(newTasks);
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <TaskForm onSubmit={handleSubmit} />
      </header>
      {isLoading ? (
        <h3 style={{ marginTop: "4rem" }}>Tá carregando calma aí</h3>
      ) : (
        <TaskList
          tasks={tasks}
          onDelete={handleDelete}
          onCheckedChange={handleCheckChange}
        />
      )}
    </div>
  );
}

export default App;
