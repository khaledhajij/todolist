import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faTrash,
  faX,
} from "@fortawesome/free-solid-svg-icons";

const Todo = (props) => {
  const handleCompletion = ({ status, id }) => {
    props.setTodos(
      [...props.todos].map((todo) => {
        return todo.id === id
          ? { ...todo, status: todo.status === "true" ? "false" : "true" }
          : { ...todo };
      })
    );
  };
  const handleDelete = (id) => {
    props.setinput({ ...props.input, id: props.id });
    props.setTodos([...props.todos].filter((todo) => todo.id !== id));
  };
  return (
    <div className="todo">
      <li
        style={
          props.status === 'true'
            ? { backgroundColor: `rgba(94, 206, 179, .4)` }
            : { backgroundColor: `rgba(100, 102, 129, .4)` }
        }
      >
        <div className="info">
          <h3>{props.title}</h3>
        </div>
        <ul>
          {props.categories.map((ctg) => (
            <li key={ctg}>{ctg}</li>
          ))}
        </ul>
        <div className="add-btns">
          <button
            type="button"
            className="btn btn-danger methods.search-icon"
            onClick={() => handleDelete(props.id)}
          >
            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
          </button>
          <button
            type="button"
            className={`btn btn-${
              props.status === "false" ? "success" : "danger"
            } methods.search-icon`}
            onClick={() => handleCompletion(props)}
          >
            <FontAwesomeIcon
              icon={props.status === "false" ? faCheck : faX}
            ></FontAwesomeIcon>
          </button>
        </div>
      </li>
    </div>
  );
};

export default Todo;
