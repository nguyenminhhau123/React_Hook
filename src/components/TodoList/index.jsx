import React from "react";
import Todo from "./Todo";
import { useState } from "react";
import TodoForm from "./TodoForm";
TodoList.propTypes = {};

function TodoList(props) {
  let initTodoList = [
    {
      id: 1,
      title: "to do list",
    },
    {
      id: 2,
      title: "to do list 2",
    },
    {
      id: 3,
      title: "to do list 3 ",
    },
  ];
  let [todoList, setTodoList] = useState(initTodoList);
  let onClickHandle = (todo, index) => {
    let newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };
  let onSubmit = (value) => {
    let newTodoList = [...todoList];
    let newTodo = {
      id: Math.floor(Math.random() * 1000),
      // title: value.title,
      ...value,
    };
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  };
  return (
    <div>
      <h2> TodoList</h2>
      <TodoForm onSubmit={onSubmit} />
      <Todo todoList={todoList} onClick={onClickHandle} />
    </div>
  );
}

export default TodoList;
