import React from "react";
import "../main/first.css"

function First({i1,i2,i3,i4,h1,h2,h3,h4,p1,p2,p3,p4}) {
  return (
    <>
      <section>
        <div className="flex ">
          <img src="./image/about.jpg" className="image" alt="" />
          <div>
            <i>{i1}</i>
            <h3>
                {h1}
            </h3>
              <p className="p-font">{p1}</p>
            <i>{i2}</i>
            <h3>
                {h2}
            </h3>
              <p className="p-font">{p2}</p>
            <i>{i3}</i>
            <h3>
                {h3}
            </h3>
              <p className="p-font">{p3}</p>
            <i>{i4}</i>
            <h3>
                {h4}
            </h3>
              <p className="p-font">{p4}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default First;
