import React from "react";

const Container = (props) => {
  return (
    <div
      id={props.id}
      className={`container mx-auto p-8 xl:px-0 ${
        props.className ? props.className : ""
      }`}>
      {props.children}
    </div>
  );
}

export default Container;