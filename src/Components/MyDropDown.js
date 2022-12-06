import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
const MyDropDown = (props) => {
  const sortArr = props.arr || [];
  const handleMethodSelect = (ele) => {
    if (props.title !== "categories") {
      props.setmethods({ ...props.methods, [props.title]: ele });
    } else {
      props.setThisCat(ele);
      if (!props.arr.includes(ele)) {
        props.setmethods({ ...props.methods, categories: [...props.arr, ele] });
      }
    }
    console.log(ele);
    console.log(props.arr);
    console.log(props.arr.includes(ele));
    console.log(props.thisCat);
  };
  const renderedArr = sortArr.map((ele) => (
    <Dropdown.Item
      href="#/action-1"
      key={ele}
      onClick={() => handleMethodSelect(ele)}
    >
      {ele}
    </Dropdown.Item>
  ));

  return (
    <DropdownButton id="dropdown-basic-button" title={props.title || "Choose"}>
      {renderedArr}
    </DropdownButton>
  );
};
export default MyDropDown;
