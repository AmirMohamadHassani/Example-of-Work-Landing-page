import Hed from "/home/avanger766/Documents/pagekasuka/kasuka_page/src/header/Headerpage.js";
import "./App.css";
import Boxes from './header/box/Boxes.js'
import Background from "./header/background-header/back";
function App() {
  return (
    <>
      <Hed
        classname="style"
        logosrc="image/logo.png"
        li1="خانه"
        li2="درباره ما"
        li3="خدمات"
        li4="نمونه کار"
        li5="لیست کشویی"
      ></Hed>
      <Background/>
      <section>
        <Boxes name="متن نمایشی" logo="f1a9"/>
        <Boxes name="نمودارکیفی" logo="ea98"/>
        <Boxes name="نمونه کار ها" logo="eb29"/>
        <Boxes name="عملکرد های پایانی" logo="efc1"/>
        <Boxes name="اطلاعات ذخیره شده " logo="ec16" />
      </section>
    </>
  );
}
export default App;
