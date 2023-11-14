import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};
TodoForm.defaultProps = {
  onSubmit: null,
};

function TodoForm({ onSubmit }) {
  const [value, setValue] = useState("");
  let handleFormOnchange = (e) => {
    setValue(e.target.value);
  };
  let handleSubmit = (e) => {
    // prevent reloading browser.
    e.preventDefault();
    if (!onSubmit) return;
    let formValue = {
      title: value,
    };
    onSubmit(formValue);
    setValue("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleFormOnchange} value={value}></input>
      </form>
    </div>
  );
}

export default TodoForm;
