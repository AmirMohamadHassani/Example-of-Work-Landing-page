import Hed from "/home/avanger766/Documents/pagekasuka/kasuka_page/src/header/Headerpage.js";
import "./App.css";
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
      />
      <Background/>
    </>
  );
}
export default App;
