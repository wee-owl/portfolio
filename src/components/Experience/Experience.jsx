import React from "react";
import PropTypes from "prop-types";
import icon from "#assets/check.svg";
import style from "./Experience.module.css";


function Experience({data}) {
  return (
    <div className={style.experience}>
      <ul className={style.experience__list}>
        {
          [...data.content].map((item, i) => {
            return (
              <li key={i} className={style.experience__item}>
                <p className={style.experience__position}>
                  {item.position}
                </p>
                <p className={style.experience__period}>
                  {item.period}
                </p>
                <p className={style.experience__company}>
                  {item.company}
                </p>
                <p className={style.experience__title}>
                  {item.title}
                </p>

                <ul className={style.experience__text_wrapper}>
                  {
                    item.text.map((text, j) => {
                        return (
                          <li key={j} className={style.experience__text} style={{listStyleImage: `url(${icon})`}}>
                            {text}
                          </li>
                        )
                    })
                  }
                </ul>

              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default Experience;

Experience.propTypes = {
  data: PropTypes.object.isRequired 
};