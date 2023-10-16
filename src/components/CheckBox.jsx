import { useState } from "react";
import styles from "./CheckBox.module.css";

function CheckBox({ task, onCheckedChange }) {
  const [isLoading, setIsLoading] = useState(false);

  function handleCheckedChange(event) {
    setIsLoading(true);
    onCheckedChange(task.id, event.target.checked);
    setIsLoading(false);
  }
  return (
    <input
      type="checkbox"
      onChange={handleCheckedChange}
      checked={task.isDone}
      className={styles.checkBox}
      disabled={isLoading}
    />
  );
}

export default CheckBox;
