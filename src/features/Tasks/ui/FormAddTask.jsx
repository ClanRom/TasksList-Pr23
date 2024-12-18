import { useRef } from "react";
import { AddTask } from "../model/addTask";

export default function FormAddTask({task, setTask, setListTask}){
    const prevValue = useRef(null)
    const {addTask} = AddTask();

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            addTask(task, setListTask);
            setTask({text: "", status: false, id: 0});
            prevValue.current.focus();
        }}>
            <input
            ref={prevValue}
            type='text'
            value={task.text}
            onChange={(event) => setTask({...task, text: event.target.value})}
            placeholder="Название задачи"
            />
            <button type="submit" className="add-btn">Добавить задачу</button>
        </form>
    )
}