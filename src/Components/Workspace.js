import React from "react";
import Todo from "./Todo";
const Workspace = ({ show, setShow, todos, setTodos, input, setinput }) => {
  const completedTodos = todos
    .filter((todo) => todo.status === "true")
    .map((todo, index) => (
      <Todo
        {...todo}
        todos={todos}
        setTodos={setTodos}
        setinput={setinput}
        input={input}
      />
    ));
  const uncompletedTodos = todos
    .filter((todo) => todo.status === "false")
    .map((todo, index) => (
      <Todo
        {...todo}
        todos={todos}
        setTodos={setTodos}
        setinput={setinput}
        input={input}
      />
    ));
  console.log(todos.filter((todo) => todo.status === "true"));
  console.log(completedTodos.length);
  return (
    <div
      className="Workspace"
      style={!show ? { opacity: 1, "z-index": "-1" } : { opacity: 0 }}
    >
      <div className="myContainer">
        <h1>My TODOs</h1>

        <div className="btn-main">
          <div className="buttons-bar">
            <button
              className="add btn btn-secondary"
              onClick={() => setShow(true)}
            >
              Add a task
            </button>
          </div>
          <div className="main completed">
            <div className="items-lists">
              <h5>Uncompleted</h5>
              {!uncompletedTodos.length ? <p>No todos</p> : null}
              <ul className="uncompleted">{uncompletedTodos}</ul>
            </div>
            <div className="items-lists">
              <h5>Completed</h5>
              {!completedTodos.length ? <p>No todos</p> : null}
              <ul className="completed">{completedTodos}</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workspace;
