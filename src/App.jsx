import { useEffect, useState } from "react";
import styles from "./App.module.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
const BASE_URL = "http://localhost:3333/tasks";

/**
 * Renders the whole application.
 * Lists all tasks and allows the user to create new ones.
 * @returns {JSX.Element}
 */
function App() {
  const [tasks, setTasks] = useState([]);

  function handleSubmit() {
    // TODO: Handle the form submission
    // Creates a new task in the database
    // Updates the list of tasks
  }

  function handleCheckChange() {
    // TODO: Handle the checkbox change
    // Updates the `done` field of a task in the database
    // Updates the list of tasks
  }

  function handleDelete() {
    // TODO: Handle the delete button click of a task
    // Deletes a task from the database
    // Updates the list of tasks
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <TaskForm />
      </header>

      <TaskList />
    </div>
  );
}

export default App;
