import styles from "./TaskList.module.css";
import {Trash2} from 'lucide-react'
import CheckBox from "./CheckBox"
import TaskItem from "./TaskItem";
function TaskList() {
    return (
        <div className={styles.content}>
            <div className={styles.filter}>
                <CheckBox/>
                <div className={styles.title}><p>Filtrar tarefas concluídas</p></div>
                <p className={styles.counter}>2 de 4</p>
            </div>
            <ul className={styles.list}>
                <li>
                    <TaskItem/>
                </li>
            </ul>
        </div>
    )
};

export default TaskList;