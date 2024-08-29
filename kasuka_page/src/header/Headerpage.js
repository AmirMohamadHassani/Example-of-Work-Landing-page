import React from "react";
import "/home/avanger766/Documents/pagekasuka/kasuka_page/src/header/headerpage.css";

export default function Hed() {
  return (
    <div className="headers">
      <h1>
        <a>
          <img src="kasuka_page/src/header/logo.png" alt="logo" /> kasuka
        </a>
      </h1>
      <nav>
        <ul>
          <li>
            <a className="link-menu" href="">خانه</a>
          </li>
          <li>
            <a className="link-menu" href="">درباره ما</a>
          </li>

          <li>
            <a className="link-menu" href="">خدمات</a>
          </li>
          <li>
            <a  className="link-menu"href="">نمونه کارها</a>
          </li>
          <li>
            <a className="link-menu" href="">لیست کشویی</a>
          </li>
          <li>
            <a className="link-menu" href="">تماس با ما</a>
          </li>
        </ul>
      </nav>
      <a className="link" href="">
        شروع
      </a>
    </div>
  );
}
