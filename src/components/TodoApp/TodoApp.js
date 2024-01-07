import React, { useState, useRef } from "react";
import { TiDelete, TiEdit } from "react-icons/ti";
import { AiFillCheckCircle } from "react-icons/ai";
import "./TodoApp.css";

function TodoApp() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [index, setIndex] = useState(null);
  const inputRef = useRef(null);

  const addOrUpdateTodo = (event) => {
    if (isEditing) {
      const newTodos = [...todos];
      newTodos[index] = todo;
      setTodos(newTodos);
      setTodo("");
      setIndex(null);
      setIsEditing(false);
      inputRef.current.focus();
    } else {
      setTodos([...todos, todo]);
      setTodo("");
      inputRef.current.focus();
    }
  };

  const editTodo = (index) => {
    setIsEditing(true);
    setIndex(index);
    setTodo(todos[index]);
    inputRef.current.focus(); 
  };
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    inputRef.current.focus();
  };

  return (
    <div className="todo-container">
      <h2>TODO App</h2>
      <form className="todo-form">
        <input
          type="text"
          placeholder="Add a new task"
          className="form-control"
          value={todo}
          ref={inputRef}
          onChange={(event) => setTodo(event.target.value)}
        />
        <button type="button" onClick={addOrUpdateTodo}>
          {isEditing === false ? "Add" : "Edit"}
        </button>
      </form>
      <div className="todo-list">
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <li className="list-item" name="inputField" key={index}>
              <span>{todo}</span>
              <div className="icons">
                {/* <AiFillCheckCircle onClick={() => markCompleted(index)} /> */}
                <TiEdit onClick={() => editTodo(index)} />
                <TiDelete onClick={() => deleteTodo(index)} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;
