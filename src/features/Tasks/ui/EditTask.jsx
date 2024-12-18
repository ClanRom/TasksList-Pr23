import { useState } from "react";

export default function EditTask({task, setListTask, isDisplayDivEdit, setIsDisplayDivEdit, editTask}){

    const [newValue, setNewValue] = useState(task.text)

    const funcEdit = (e) => {
        e.preventDefault();
        editTask(setListTask, task.id, newValue)
        setIsDisplayDivEdit(false);
    }

    return (
        <form className="form-edit-task" onSubmit={funcEdit} style={{display: isDisplayDivEdit ? 'flex' : 'none'}}>
            <input
            type='text'
            value={newValue}
            onChange={(event) => setNewValue(event.target.value)}
            placeholder="Название измененной задачи"
            />
            <button type="submit" className="save">Сохранить</button>
        </form>
    )
}