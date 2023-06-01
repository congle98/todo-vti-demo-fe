import React, {Fragment, useEffect, useState} from 'react'
import axios from "axios";
import TodoDetail from "./todoDetail";

function TodoList() {
    const [todos,setTodo] = useState([])


    useEffect(() => {
        axios.get("http://localhost:8080/todo").
        then(rp => setTodo(rp.data)).catch(err => console.log(err));
    },[])
    return (
        <Fragment>
            <div>Danh sách các công việc</div>
            {todos.map(it=> (<TodoDetail key={it.id} todo={it}/>))}
        </Fragment>
    )
}

export default TodoList