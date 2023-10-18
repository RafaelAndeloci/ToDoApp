import styles from "./TaskItem.module.css";
import { Trash2 } from "lucide-react";
import { useState } from "react";

function TaskItem({ task, onDelete, onCheckedChange }) {
  const [isLoading, setIsLoading] = useState(false);
  function handleCheckedChange(event) {
    setIsLoading(true);
    onCheckedChange(task.id, event.target.checked);
    setIsLoading(false);
  }

  return (
    <li>
      <label className={styles.item}>
        <input
          id={task.id}
          type="checkbox"
          onChange={handleCheckedChange}
          checked={task.isDone}
          className={styles.checkBox}
          disabled={isLoading}
        />

        <p className={styles.description}>{task.description}</p>

        <button
          type="button"
          onClick={() => onDelete(task.id)}
          className={styles.deleteBtn}
          aria-label="Deletar tarefa"
        >
          <Trash2 size={16} />
        </button>
      </label>
    </li>
  );
}

export default TaskItem;
