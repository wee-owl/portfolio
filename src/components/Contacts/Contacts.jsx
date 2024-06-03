import React from "react";
import PropTypes from "prop-types";
import SVGicon from "#components/SVGicon/SVGicon";
import style from "./Contacts.module.css";


function Contacts({data}) {
  return (
    <div className={style.contacts}>
      <ul className={style.contacts__list}>
        {
          [...data.content].map((item, i) => {
            return (
              <li key={i} className={style.contacts__item}>
                <a className={style.contacts__link} href={item.link} target="_blank" rel="noreferrer">
                  <SVGicon name={item.icon}/>
                  <span className={style.contacts__social}>{item.social}</span>
                </a>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default Contacts;

Contacts.propTypes = {
  data: PropTypes.object.isRequired 
};