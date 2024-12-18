import { useEffect, useRef, useState } from "react"
import FormAddTask from "../../features/Tasks/ui/FormAddTask"
import PostTaskList from "../../features/Tasks/ui/PostTaskList";
import ButtonFilterTasks from "../../features/Tasks/ui/ButtonFilterTasks";

export default function PostsTasks(){
const [task, setTask] = useState({text: "", status: false, id: 0});
const [listTask, setListTask] = useState([]);
const [filterListTask, setfilterTask] = useState([])
const tasks = useRef(0);

    useEffect(() => {
        tasks.current = listTask.length;
    }, [listTask])

    return(
        <div className="posts-page">
        <FormAddTask
        task={task}
        setTask={setTask}
        setListTask={setListTask}
        />
        <p>Всего добавленных задач: {tasks.current}</p>
        <div className="filter-list">
            <p>Отображение задач:</p>
            <ButtonFilterTasks
            listTask={listTask}
            setfilterTask={setfilterTask}
            />
        </div>
        <PostTaskList
        filterListTask={filterListTask}
        setListTask={setListTask}
        />
        </div>
    )
}