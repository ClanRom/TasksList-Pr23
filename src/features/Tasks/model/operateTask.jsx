export function OperateTask(){
    const delTask = (setListTask, idTask) => {
        setListTask(prev => prev.filter(task => task.id !== idTask));
    }

    const editTask = (setListTask, idTask, newValue) => {
        setListTask(prev => prev.map((task) => task.id === idTask ? {...task, text: newValue} : task))
    } 

    const complityTask = (setListTask, idTask) => {
        setListTask(prev => prev.map((task) => task.id === idTask ? {...task, status: !task.status} : task))
    }

    return {delTask, editTask, complityTask}
}