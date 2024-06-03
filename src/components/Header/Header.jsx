import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import data from "#utils/data";
import image from "#assets/bg-header.png";
import style from "./Header.module.css";


function Header() {
  const [state, setState] = useState(false);
  const bg = {backgroundImage: `url(${image})`};

  const handleBurger = (e) => {
    e.preventDefault();
    if (e.target.closest("button") || e.target.closest("li")) {
      setState(state ? false : true);
    } 
  };


  return (
    <header className={style.header} style={bg} onClick={handleBurger}>

      <button className={style.burger__button}>
        <span className={state ? `${style.burger__line} ${style.burger__line_active}` : style.burger__line}></span>
      </button>

      <nav className={state ? `${style.nav} ${style.burger__nav}` : style.nav}>
        <ul className={style.nav__list}>
          {
            data.map((item, i) => item.isNav ?
              <li key={i} className={style.nav__item}>
                <HashLink to={`/portfolio/#${item.id}`} className={style.nav__link}>{item.title}</HashLink>
              </li> : ""
            )
          }
        </ul>
      </nav>

    </header>
  );
}

export default Header;