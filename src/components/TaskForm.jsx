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

    //Resetando o form
    setDescripition("");
    setIsLoading(false);
    inputRef.current?.focus();
  }

  return (
    <div>
      <h1>Minhas tarefas</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Cursin de React ✌️"
          required
          minLength={2}
          id="descripition"
          value={descripition}
          onChange={(event) => setDescripition(event.target.value)}
        />
        <button disabled={isLoading} type="submit">
          {isLoading ? "Carregando..." : "Criar tarefa"}
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
