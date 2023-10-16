import { useState } from "react";

import styles from "./TaskList.module.css";
import CheckBox from "./CheckBox";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onDelete, onCheckedChange }) {
  const [isLoading, setIsLoading] = useState(false);
  const [checkedFilter, setCheckedFilter] = useState(false);

  const notDone = tasks.filter((item) => item.isDone === false);
  const doneTasks = tasks.filter((item) => item.isDone);

  const filteredTasks = checkedFilter ? notDone : tasks;
  let counter = tasks.length;

  return (
    <div className={styles.content}>
      {tasks.length ? (
        <div>
          <div className={styles.filter}>
            <CheckBox
              task={filteredTasks.map((task) => task)}
              onCheckedChange={() => {
                setIsLoading(true);
                setCheckedFilter(!checkedFilter);
                setIsLoading(false);
              }}
            />
            <div className={styles.title}>
              <p>Filtrar tarefas não concluídas</p>
            </div>

            <p className={styles.counter}>
              {doneTasks.length} de {counter}
            </p>
          </div>

          <ul className={styles.list}>
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task) => (
                <TaskItem
                  task={task}
                  key={task.id}
                  onDelete={onDelete}
                  onCheckedChange={onCheckedChange}
                />
              ))
            ) : isLoading ? (
              <p>Carregando tarefas...</p>
            ) : (
              <p>Todas as tarefas foram concluídas. parabains</p>
            )}
          </ul>
        </div>
      ) : (
        <p style={{ marginTop: "4rem" }}>Não há nenhuma tarefa adicionada.</p>
      )}
    </div>
  );
}

export default TaskList;
