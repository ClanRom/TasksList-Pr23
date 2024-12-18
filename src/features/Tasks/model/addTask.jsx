import { useState } from "react";

export function AddTask(){
    const [idTask, setIdTask] = useState(0);

    const addTask = (textTask, setListTask) => {
        if (textTask.text.trim() === '') return;
        setListTask((prev) => [{...textTask, id: idTask}, ...prev])
        setIdTask((prev) => prev + 1)
    }

    return {addTask}
}