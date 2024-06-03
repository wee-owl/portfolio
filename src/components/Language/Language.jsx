import React from "react";
import PropTypes from "prop-types";
import icon from "#assets/check.svg";
import style from "./Language.module.css";


function Language({data}) {
  return (
    <div className={style.language}>
      <ul className={style.language__list}>
        {
          [...data.content].map((item, i) => {
            return (
              <li key={i} className={style.language__item} style={{listStyleImage: `url(${icon})`}}>
                <p>
                  <span className={style.language__title}>{item.language}</span> ({item.level})
                </p>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default Language;

Language.propTypes = {
  data: PropTypes.object.isRequired 
};