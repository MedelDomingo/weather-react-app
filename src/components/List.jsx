import React from "react";
import "./List.scss";

const List = (props) => {
  return (
    <li>
      <span>{props.label}</span>
      {props.overcast}
    </li>
  );
};

export default List;
