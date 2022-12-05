import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaintbrush,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
const MyInput = (props) => {
  const handleChange = (e) => {
    props.setinput({ ...props.input, [e.target.name]: e.target.value });
    console.log(props.input);
  };
  const handleAdd = (e) => {
    props.input.categories.push(props.input.category);
    console.log(props.input.categories);
    props.setinput({ ...props.input, category: "" });
  };
  return (
    <div>
      <label>{props.name}</label>
      <div className="input-group">
        <div class="form-outline">
          {props.name !== "status" ? (
            <input
              type="search"
              class="form-control"
              value={props.value}
              name={props.name}
              onChange={(e) => handleChange(e)}
            />
          ) : (
            <select value={props.value} name={props.name} onChange={(e) => handleChange(e)}>
              <option value='true' >
                completed
              </option>
              <option value='false'>
                uncompleted
              </option>
            </select>
          )}
        </div>
        {props.name === "category" && (
          <button
            type="button"
            class="btn btn-primary search-icon"
            onClick={handleAdd}
          >
            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
          </button>
        )}
        {props.name === "color" && (
          <button class="btn btn-primary btn-sm" id="color-picker-2">
            <FontAwesomeIcon icon={faPaintbrush} />
          </button>
        )}
      </div>
    </div>
  );
};
export default MyInput;
