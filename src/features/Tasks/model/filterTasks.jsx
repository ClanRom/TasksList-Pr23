export function FilterTasks(){
    const filterTasks = (listTask, setfilterTask, typeFilter) => {
        switch(typeFilter){
            case "All":
                setfilterTask(listTask);
                break;
            case "Performed":
                setfilterTask(listTask.filter(task => task.status === true));
                break;
            case "Unperformed":
                setfilterTask(listTask.filter(task => task.status === false));
                break;
        }
    }

    return {filterTasks};
}