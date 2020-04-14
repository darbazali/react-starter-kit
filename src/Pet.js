import React from "react";

export default function Pet({name, age}) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
    </div>
  );
}
