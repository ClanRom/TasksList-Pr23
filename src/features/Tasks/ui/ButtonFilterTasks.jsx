import { useEffect, useState } from "react"
import Button from "../../../shared/ui/button"
import { FilterTasks } from "../model/filterTasks"


export default function ButtonFilterTask({listTask, setfilterTask}){

    const [typeFilter, setTypeFilter] = useState("All");
    const {filterTasks} = FilterTasks();

    useEffect(() => {
        filterTasks(listTask, setfilterTask, typeFilter)
    }, [listTask]);

    const handeClickFilter = (value) => {
        setTypeFilter(value);
        filterTasks(listTask, setfilterTask, value)
    }

    return(
        <div>
            <Button
            textBtn="Все"
            funcBtn={() => handeClickFilter("All")}
            classNameBtn="filter-btn"
            />
            <Button
            textBtn="Выполненные"
            funcBtn={() => handeClickFilter("Performed")}
            classNameBtn="filter-btn"
            />
            <Button
            textBtn="Невыполненные"
            funcBtn={() => handeClickFilter("Unperformed")}
            classNameBtn="filter-btn"
            />
        </div>
    )
}