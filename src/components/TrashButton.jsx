import styles from "./TrashButton.module.css";
import { Trash2 } from "lucide-react";

function TrashButton() {
  return (
    <button className={styles.btn} type="submit">
      <Trash2 />
    </button>
  );
}

export default TrashButton;
