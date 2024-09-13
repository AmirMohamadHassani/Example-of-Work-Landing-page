import React from "react";

function first({i1,i2,i3,i4,h1,h2,h3,h4,p1,p2,p3,p4}) {
  return (
    <>
      <section>
        <div className="flex">
          <img src="" alt="" />
          <div>
            <i>{i1}</i>
            <h3>
                {h1}
              <p>{p1}</p>
            </h3>
            <i>{i2}</i>
            <h3>
                {h2}
              <p>{p2}</p>
            </h3>
            <i>{i3}</i>
            <h3>
                {h3}
              <p>{p3}</p>
            </h3>
            <i>{i4}</i>
            <h3>
                {h4}
              <p>{p4}</p>
            </h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default first;
