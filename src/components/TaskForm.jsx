import { useRef, useState } from "react";
import styles from "./TaskForm.module.css";

function TaskForm({ onSubmit }) {
  const inputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  let [descripition, setDescripition] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);

    const task = {
      descripition,
      isDone: false,
    };

    await onSubmit(task);
    setIsLoading(false);

    //Resetando o form
    setDescripition("");

    inputRef.current?.focus();
  }

  return (
    <div>
      <h1>Minhas tarefas</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Cursin de React ✌️"
          required
          minLength={2}
          id="descripition"
          value={descripition}
          onChange={(event) => setDescripition(event.target.value)}
        />
        <input type="submit" value="Criar tarefa" disabled={isLoading} />
      </form>
    </div>
  );
}

export default TaskForm;
