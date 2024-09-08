import React from "react";
import "/home/avanger766/Documents/pagekasuka/kasuka_page/src/header/headerpage.css";

export default function Hed({ li1, li2, li3, li4, li5, logosrc }) {
  return (
    <>
      <header className="headers">
        <h1>
          <a className="logo">
            kasuka
            <img src={logosrc} alt="logo" />
          
          </a>
        </h1>
        <nav>
          <ul>
            <li>
              <a className="link-menu" href="">
                {li1}
              </a>
            </li>
            <li>
              <a className="link-menu" href="">
                {li2}
              </a>
            </li>

            <li>
              <a className="link-menu" href="">
                {li3}
              </a>
            </li>
            <li>
              <a className="link-menu" href="">
                {li4}
              </a>
            </li>
            <li>
              <a className="link-menu" href="">
                {li5}
              </a>
            </li>
            <li>
              <a className="link-menu" href="">
                تماس با ما
              </a>
            </li>
          </ul>
        </nav>
        <a className="link" href="">
          شروع
        </a>
      </header>
      
    </>
  );
}
