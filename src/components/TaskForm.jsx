import styles from "./TaskForm.module.css";

function TaskForm(){
    return (
    <div>
        <h1>Minhas tarefas</h1>
        <div className={styles.form}>
            <input type="text" placeholder="Cursin de React ✌️" autoFocus required/>
            <input type="submit" value="Criar tarefa" />
        </div>
    </div>
    )
}

export default TaskForm;