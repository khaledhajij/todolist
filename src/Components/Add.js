import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import MyInput from "./MyInput";

const Add = ({
  show,
  setShow,
  todos,
  setTodos,
  input,
  setinput,
  stableData,
  setStableData,
  methods,
  setmethods
}) => {
  const data = [
    { name: "title", value: input.title },
    { name: "status", value: input.status },
    { name: "category", value: input.category },
  ];
  const handleAdd = () => {
    setTodos([...todos, input]);
    setStableData([...stableData, input]);
    data.push(input);
    setShow(false);
    setinput({
      title: "",
      status: 'false',
      category: "",
      categories: [],
      color: "",
      id: todos.length + 1,
    });

  };
  const validation = input.title.length && input.categories.length

  const form = data.map((obj,index) => (
    <MyInput {...obj} key={index} setinput={setinput} input={input} methods={methods} setmethods={setmethods} />
  ));
  return (
    <div
      className="Add-container"
      style={show ? { opacity: 1 } : { opacity: 0, "zIndex": "-1" }}
    >
      <div className="Add">
        <FontAwesomeIcon
          icon={faX}
          className="cancel-icon"
          onClick={() => setShow(false)}
        />
        <div className="form-outline">{form}</div>
        <div className="categories-container info todo">
          {input.categories.map((ctg) => (
            <li key={ctg}>{ctg}</li>
          ))}
        </div>
        <div className="buttons">
          <button className="btn btn-primary" onClick={handleAdd} disabled={!validation}>
            Add Task
          </button>
          <button className="btn btn-secondary" onClick={() => setShow(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Add;
