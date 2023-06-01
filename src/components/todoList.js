import React, {Fragment, useEffect, useState} from 'react'
import axios from "axios";

function TodoList() {
    const [todos,setTodo] = useState([])


    useEffect(() => {
        axios.get("http://localhost:8080/todo").
        then(rp => setTodo(rp.data)).catch(err => console.log(err));
    },[])
    return (
        <Fragment>
            <div>Danh sách các công việc</div>
            <table>
                <tr>
                    <td>id của công việc</td>
                    <td>mô tả công việc</td>
                </tr>
                {todos.map(it=> (
                    <tr>
                        <td>{it.id}</td>
                        <td>{it.description}</td>
                    </tr>))}
            </table>
        </Fragment>
    )
}

export default TodoList