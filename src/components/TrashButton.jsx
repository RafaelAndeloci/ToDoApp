import styles from "./TrashButton.module.css";
import { Trash2 } from "lucide-react";

function TrashButton({ id, onDelete }) {
  function handleDelete() {
    onDelete(id);
  }
  return (
    <button onClick={handleDelete} className={styles.btn} type="submit">
      <Trash2 />
    </button>
  );
}

export default TrashButton;
