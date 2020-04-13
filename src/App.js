import React from "react";
import { render } from "react-dom";

import Pet from "./Pet";
import Cat from "./Cat";
import Dog from "./Dog";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement(Pet, { name: "Max" }),
    React.createElement(Pet, { age: "2" }),
    React.createElement(Cat, { name: "Pshii" }),
    React.createElement(Dog, { speed: "30m/h" }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
