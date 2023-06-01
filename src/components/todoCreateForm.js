import React, {Fragment, useState} from 'react'
import axios from "axios";

function TodoCreateForm() {
  const [todo, setTodo] = useState();
   const [message, setMessage] = useState();
  const createTodo = () => {
    console.log({description:todo});
    axios.post("http://localhost:8080/todo", {description:todo})
        .then(rp => setMessage("Đã thêm mới thành công"))
        .catch(err => console.log(err));
  }
  return (
      <Fragment>
        <div>Đây là trang thêm mới todo</div>
        <div>{message}</div>
        <input type="text" onChange={(input) => setTodo(input.target.value)}/>
        <button onClick={createTodo}>Nhấn thêm</button>
      </Fragment>
  )
}

export default TodoCreateForm