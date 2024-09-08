import React from "react";
import "./boxes.css";
export default function Boxes({ name, logo }) {
  return (
    <>
      <div>
        <div className="box">
          <i style={{ content: `"\{logo}"`}}></i>
          <p>{name}</p>
        </div>
      </div>
    </>
  );
}
