import React from "react";

export default function Dog(props) {
  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, props.speed)
  );
}
