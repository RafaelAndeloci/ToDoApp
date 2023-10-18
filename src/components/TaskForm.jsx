import { useRef, useState } from "react";
import styles from "./TaskForm.module.css";

function TaskForm({ onSubmit }) {
  const inputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    //Utilizando Uncontrolled Input.
    const description = inputRef.current.value;

    //Verificando se o valor do input são só espaços em branco.
    if (description.trim(" ").length === 0) {
      setIsLoading(false);
      inputRef.current.value = "";
      return;
    }

    const task = {
      description,
      isDone: false,
    };
    await onSubmit(task);

    //Resetando o form
    setIsLoading(false);
    inputRef.current.value = "";
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
          id="description"
        />
        <button disabled={isLoading} type="submit">
          {isLoading ? "Carregando..." : "Criar tarefa"}
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
