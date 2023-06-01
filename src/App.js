
import './App.css';
import Home from './components/home';
import TodoCreateForm from './components/todoCreateForm';
import TodoList from './components/todoList';

import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import React from "react";
function App() {
  return (

    <BrowserRouter>
        <div>
            <nav>
                <li>
                    <Link to="/todo">TodoList</Link>
                </li>
                <li>
                    <Link to="/create">CreateTodo</Link>
                </li>
            </nav>
        </div>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/todo" element={<TodoList/>}/>
            <Route path="/create" element={<TodoCreateForm/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
