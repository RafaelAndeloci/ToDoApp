import styles from "./TaskItem.module.css";
import { Trash2 } from "lucide-react";
import CheckBox from "./CheckBox";
import TrashButton from "./TrashButton";
import { useState } from "react";

function TaskItem({ task, onDelete, onCheckedChange }) {
  return (
    <div className={styles.item}>
      <CheckBox
        task={task}
        onCheckedChange={onCheckedChange}
        className={styles.itemCheck}
      />
      <p className={task.isDone ? styles.forgetPadrinFeito : ""}>
        {task.descripition}
      </p>
      <TrashButton
        id={task.id}
        onDelete={onDelete}
        className={styles.deleteBtn}
      />
    </div>
  );
}

export default TaskItem;
