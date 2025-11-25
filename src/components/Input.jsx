import React from "react";

import "./Input.scss";
import Button from "./Button";

const Input = (props) => {
  return (
    <input
      placeholder={props.placeholder}
      value={props.value}
      type={props.type}
      onChange={props.onChange}
    />
  );
};

export default Input;
