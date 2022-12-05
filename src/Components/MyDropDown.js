import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
const sortDropDown = (props) => {
  const sortArr = ["All", "Completed", "Uncompleted"];
  const renderedArr = sortArr.map((ele) => (
    <Dropdown.Item href="#/action-1">{ele}</Dropdown.Item>
  ));
  return (
    <DropdownButton id="dropdown-basic-button" title={props.title}>
      {renderedArr}
    </DropdownButton>
  );
};
export default sortDropDown;
