import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement(Pet, { name: "Max" }),
    React.createElement(Pet, { age: "2" }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
