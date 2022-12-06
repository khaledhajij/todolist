import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Todo from "./Todo";
import MyDropDown from "./MyDropDown";
const Workspace = ({
  show,
  setShow,
  todos,
  setTodos,
  input,
  setinput,
  methods,
  setmethods,
  stableData,
  setStableData,
  thisCat,
  setThisCat,
}) => {
  console.log(todos, methods.status, methods.categories);
  const renderedTodos = todos
    .filter((todo) =>
      methods.status === "Completed"
        ? todo.status === "true"
        : methods.status === "Uncompleted"
        ? todo.status === "false"
        : todo
    )
    .filter((todo) => todo.title.indexOf(methods.search) > -1)
    .filter((todo) =>
      thisCat !== "All" ? todo.categories.includes(thisCat) : todo
    )
    .map((todo, index) => (
      <Todo
        {...todo}
        todos={todos}
        setTodos={setTodos}
        setinput={setinput}
        input={input}
        key={index}
        methods={methods}
        setmethods={setmethods}
      />
    ));
  const handleMethodsChange = (e) => {
    setmethods({ ...methods, [e.target.name]: e.target.value });
  };
  return (
    <div
      className="Workspace"
      style={!show ? { opacity: 1, zIndex: "-1" } : { opacity: 0 }}
    >
      <div className="myContainer">
        <div className="buttons-bar">
          <button
            className="add btn btn-secondary"
            onClick={() => setShow(true)}
          >
            Add a task
          </button>
          <div className="input-group">
            <div className="form-outline">
              <input
                type="search"
                id="form1"
                className="form-control"
                value={methods.search}
                onChange={(e) => handleMethodsChange(e)}
                name="search"
              />
            </div>
            <button type="button" className="btn btn-primary">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>

          <div className="dropdowns">
            <MyDropDown
              arr={["All", "Completed", "Uncompleted"]}
              title="status"
              todos={todos}
              setTodos={setTodos}
              stableData={stableData}
              setStableData={setStableData}
              methods={methods}
              setmethods={setmethods}
              thisCat={thisCat}
              setThisCat={setThisCat}
            />
            <MyDropDown
              arr={["All", ...methods.categories]}
              title="categories"
              todos={todos}
              setTodos={setTodos}
              stableData={stableData}
              setStableData={setStableData}
              methods={methods}
              setmethods={setmethods}
              thisCat={thisCat}
              setThisCat={setThisCat}
            />
          </div>
        </div>
        <h1>My TODOs</h1>

        <div className="btn-main">
          <div className="main completed">
            <div className="items-lists">
              {/* <h5>Uncompleted</h5> */}
              {!renderedTodos.length ? <p>No todos</p> : null}
              <ul className="uncompleted">{renderedTodos}</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workspace;
