import styles from "./TaskItem.module.css";
import CheckBox from "./CheckBox";
import { Trash2 } from "lucide-react";

function TaskItem({ task, onDelete, onCheckedChange }) {
  return (
    <li>
      <label className={styles.item}>
        <CheckBox
          task={task}
          onCheckedChange={onCheckedChange}
          className={styles.itemCheck}
        />
        <p>{task.descripition}</p>
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
