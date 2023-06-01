import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import TodoCreateForm from './components/todoCreateForm';
import TodoList from './components/todoList';
import { Fragment } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>}>
                <Route path="todo" element={<TodoList/>}/>
                <Route path="create" element={<TodoCreateForm/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
