import { useState } from "react";
import Button from "../../../shared/ui/button"
import { OperateTask } from "../model/operateTask"
import EditTask from "./EditTask";


export default function PostTaskList({filterListTask, setListTask}){

    const [isDisplayDivEdit, setIsDisplayDivEdit] = useState(false);
    const {delTask, editTask, complityTask} = OperateTask();

    return(
        <div className="tasks-list">
            <h2>Список Задач</h2>
        <ul>
            {filterListTask.map(task => (
                <li key={task.id}>
                    <div onClick={() => complityTask(setListTask, task.id)}>
                        <h3 style={{textDecorationLine: task.status ? "line-through" : "none"}}>{task.text}</h3>
                        <p className="info-task">{task.status ? "Выполнен" : "Невыполнен"}</p>
                    </div>
                    <Button
                    textBtn="Редактировать"
                    funcBtn={() => setIsDisplayDivEdit(true)}
                    classNameBtn="btn-edit"
                    />
                    <Button
                    textBtn="Удалить"
                    funcBtn={() => delTask(setListTask, task.id)}
                    classNameBtn="btn-remove"
                    />
                    <EditTask
                    task={task}
                    setListTask={setListTask}
                    isDisplayDivEdit={isDisplayDivEdit}
                    setIsDisplayDivEdit={setIsDisplayDivEdit}
                    editTask={editTask}
                    />
                </li>
            ))}
        </ul>
        </div>
    )
}