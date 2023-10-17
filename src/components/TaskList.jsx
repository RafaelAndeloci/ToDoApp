import { useState } from "react";

import styles from "./TaskList.module.css";
import CheckBox from "./CheckBox";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onDelete, onCheckedChange }) {
  const [checkedFilter, setCheckedFilter] = useState(false);

  const notDone = tasks.filter((item) => item.isDone === false);
  const doneTasks = tasks.filter((item) => item.isDone);

  const filteredTasks = checkedFilter ? notDone : tasks;
  let counter = tasks.length;

  return (
    <div>
      {tasks.length ? (
        <div>
          <div className={styles.filter}>
            <CheckBox
              id="filter"
              task={filteredTasks.map((task) => task)}
              onCheckedChange={() => {
                setCheckedFilter(!checkedFilter);
              }}
            />
            <div className={styles.title}>
              <label htmlFor="filter">Filtrar tarefas não concluídas.</label>
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
