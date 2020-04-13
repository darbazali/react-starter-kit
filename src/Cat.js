import React from "react";

export default function Cat(props) {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, props.name)
  );
}
