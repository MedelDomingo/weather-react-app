import React from "react";

import "./Button.scss";
const Button = (props) => {
  return (
    <button className={props.className} type={props.submit}>
      {props.buttonText}
    </button>
  );
};

export default Button;
