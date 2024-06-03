import React from "react";
import PropTypes from "prop-types";
import icon from "#assets/check.svg";
import style from "./Education.module.css";


function Education({data}) {
  return (
    <div className={style.education}>
      <ul className={style.education__list}>
        {
          [...data.content].map((item, i) => {
            return (
              <li key={i} className={style.education__item} style={{listStyleImage: `url(${icon})`}}>
                <p>
                  <span className={style.education__title}>{item.qualification}</span>, <span>{item.year}</span>
                </p>
                <p>
                  <span>{item.institution}</span>, <span>{item.city}</span>
                </p>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default Education;

Education.propTypes = {
  data: PropTypes.object.isRequired 
};