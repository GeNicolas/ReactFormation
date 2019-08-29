import React from "react";
import Header from "../Structure/Header";

export default function PizzaDetails(props) {
  console.log(props);
  return (
    <>
      <Header />
      <h1>{`Pizza ${props.match.params.name}`}</h1>
      <p>
        <ul>
          <li>{props.match.params.desc}</li>
          <li>{props.match.params.price}</li>
        </ul>
      </p>
    </>
  );
}
