import styles from "./TaskItem.module.css";
import { Trash2 } from "lucide-react";
import CheckBox from "./CheckBox";
import TrashButton from "./TrashButton";

function TaskItem() {
  return (
    <div className={styles.item}>
      <CheckBox className={styles.itemCheck} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, ut!
        Amet pariatur temporibus vitae
      </p>
      <TrashButton className={styles.deleteBtn} />
    </div>
  );
}

export default TaskItem;
