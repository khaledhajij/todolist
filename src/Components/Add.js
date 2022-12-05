import { faCancel, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import MyInput from "./MyInput";

const Add = ({
  show,
  setShow,
  todos,
  setTodos,
  input,
  setinput,
  renData,
  setRenData,
}) => {
  const data = [
    { name: "title", value: input.title },
    { name: "status", value: input.status },
    { name: "category", value: input.category },
  ];
  const handleAdd = () => {
    setTodos([...todos, input]);
    data.push(input);
    setShow(false);
    setinput({
      title: "",
      status: 'true',
      category: "",
      categories: [],
      color: "",
      id: todos.length + 1,
    });
  };
  const form = data.map((obj) => (
    <MyInput {...obj} setinput={setinput} input={input} />
  ));
  return (
    <div
      className="Add-container"
      style={show ? { opacity: 1 } : { opacity: 0, "z-index": "-1" }}
    >
      <div className="Add">
        <FontAwesomeIcon
          icon={faX}
          className="cancel-icon"
          onClick={() => setShow(false)}
        />
        <div class="form-outline">{form}</div>
        <div className="categories-container info todo">
          {input.categories.map((ctg) => (
            <li>{ctg}</li>
          ))}
        </div>
        <div className="buttons">
          <button className="btn btn-primary" onClick={handleAdd}>
            Add Task
          </button>
          <button className="btn btn-secondary">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Add;
