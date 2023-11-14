import React from "react";
import PropTypes from "prop-types";

Todo.propTypes = {
  todoList: PropTypes.array,
  onClick: PropTypes.func,
};
Todo.defaultProps = {
  todoList: [],
};

function Todo(props) {
  let { todoList, onClick } = props;
  let handleOnClick = (todo, index) => {
    if (onClick) {
      onClick(todo, index);
    }
  };
  return (
    <div>
      <ul className="todo-list">
        {todoList.map((todo, index) => (
          <li
            key={todo.id}
            onClick={() => {
              handleOnClick(todo, index);
            }}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
