import React from "react";
import "/home/avanger766/Documents/pagekasuka/kasuka_page/src/header/headerpage.css"


export default function Hed() {
  return (
    <div className="headers">
      <h1>
        <a>
           <img src="kasuka_page/public/image/logo.png" alt=""/>
           kasuka
        </a>
      </h1>
      <nav>
        <ul>
          <li>خانه</li>
          <li>درباره ما</li>
          <li>خدمات</li>
          <li>نمونه کارها</li>
          <li>تیم</li>
          <li>لیست کشویی</li>
          <li> تماس با ما</li>
        </ul>
      </nav>
      <a href="">شروع</a>
    </div>
  );
}
