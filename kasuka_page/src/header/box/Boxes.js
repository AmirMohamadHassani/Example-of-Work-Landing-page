import React from "react";
import "./boxes.css";
export default function Boxes({ name, logo }) {
  return (
    <>
      <div>
        <div className="box">
        <img src={logo}alt="logo" className="logo"/>
       <p className="p">{name}</p>
        </div>
      </div>
    </>
  );  
}
