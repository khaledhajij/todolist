import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintbrush, faPlus } from "@fortawesome/free-solid-svg-icons";
const MyInput = (props) => {
  const handleChange = (e) => {
    props.setinput({ ...props.input, [e.target.name]: e.target.value });
  };
  const handleAdd = (e) => {
    props.input.categories.push(props.input.category);
    props.setmethods({
      ...props.methods,
      categories: [...props.methods.categories, ...props.input.categories],
    });
    props.setinput({ ...props.input, category: "" });
  };
  return (
    <div>
      <label>{props.name}</label>
      <div className="input-group">
        <div className="form-outline">
          {props.name !== "status" ? (
            <input
              type="methods.search"
              className="form-control"
              value={props.value}
              name={props.name}
              onChange={(e) => handleChange(e)}
            />
          ) : (
            <select
              value={props.value}
              name={props.name}
              onChange={(e) => handleChange(e)}
            >
              <option value="true">completed</option>
              <option value="false">uncompleted</option>
            </select>
          )}
        </div>
        {props.name === "category" && (
          <button
            type="button"
            className="btn btn-primary methods.search-icon"
            onClick={handleAdd}

          >
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </button>
        )}
        {props.name === "color" && (
          <button className="btn btn-primary btn-sm" id="color-picker-2">
            <FontAwesomeIcon icon={faPaintbrush} />
          </button>
        )}
      </div>
    </div>
  );
};
export default MyInput;
