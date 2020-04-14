import React from "react";

export default function Pet(props) {

  return (
    <div>
      <h1>Name: {props.name.toUpperCase() }</h1>
      <h1>Age: {props.age}</h1>
    </div>
  );
}

