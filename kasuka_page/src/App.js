import Hed from "/home/avanger766/Documents/pagekasuka/kasuka_page/src/header/Headerpage.js";
import "./App.css";
import first from "./main/first";
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
        li6="تماس با ما"
      ></Hed>
      <Background/>
      <first
      i1 = {"S"}
      i2 = {"S"}
      i3 = {"S"}
      i4 = {"S"}
      h1 = {"S"}
      h2 = {"S"}
      h3 = {"S"}
      h4 = {"S"}
      p1 = {"S"}
      p2 = {"S"}
      p3 = {"S"}
      p4 = {"S"}
      />
    </>
  );
}
export default App;
