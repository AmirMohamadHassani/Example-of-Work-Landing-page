import React ,{useEffect} from "react";
import "/home/avanger766/Documents/pagekasuka/kasuka_page/src/header/headerpage.css";

export default function Hed({ li1, li2, li3, li4, li5 , li6, logosrc }) {
  useEffect(() => {
    const changeHeaderBg = () => {
      const header = document.querySelector('.headers');
      if (window.scrollY > 0) {
        header.style.backgroundColor = '#0C0C0C'; // رنگ جدید هدر بعد از اسکرول
        header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
      } else {
        header.style.backgroundColor = 'transparent'; // رنگ اولیه هدر
        header.style.boxShadow = 'none';
      }
    };

    window.addEventListener('scroll', changeHeaderBg);
    
    // پاکسازی event listener
    return () => {
      window.removeEventListener('scroll', changeHeaderBg);
    };
  }, []);

  return (
    <>
      <header className="headers">
        <h1>
          <a className="logo">
            kasuka
            <img src={logosrc} alt="logoes" className="logOfPage" />
          
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
                  {li6}
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
