import React from "react";
import Boxes from "../box/Boxes";
import "../background-header/back.css";
export default function Background() {
  return (
    <>
      <section
        id="main"
        className="justify-content d-flex  align-item-senter">

        <>

        <section className="flex">
        <Boxes name="متن نمایشی" logo="f1a9"/>
        <Boxes name="نمودارکیفی" logo="ea98"/>
        <Boxes name="نمونه کار ها" logo="eb29"/>
        <Boxes name="عملکرد های پایانی" logo="efc1"/>
        <Boxes name="اطلاعات ذخیره شده " logo="ec16" />
      </section>

        <div className="container">
          <h1>راه حل های قدرتمند دیجیتال با </h1>
          <span className="span">kasuka</span>
          <h2>ما تیمی از بازاریابان با استعداد دیجیتال هستیم </h2>
        </div>
        </>
      </section>
    </>
  );
}
