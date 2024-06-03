import React from "react";
import image from "#assets/bg-footer.png";
import style from "./Footer.module.css";


function Footer() {
  const bg = {backgroundImage: `url(${image})`};
  const now = new Date();
  const year = now.getFullYear();

  return (
    <footer className={style.footer} style={bg}>
      <p className={style.copyright}>
        &#169;{`2022–${year} by`}&nbsp;
        <span>
          wee-owl
        </span>
      </p>
    </footer>
  );
}

export default Footer;