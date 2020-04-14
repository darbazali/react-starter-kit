import React from "react";
import { render } from "react-dom";

import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <Pet name="Max" age="2" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
