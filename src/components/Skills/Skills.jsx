import React from "react";
import PropTypes from "prop-types";
import style from "./Skills.module.css";


function Skills({data}) {
  return (
    <div className={style.skills}>
      {
        [...data.content].map((item, i) => {
          return (
            <div key={i} className={style.skills__block}>
              <p className={style.skills__title}>{item.title}</p>
              <div className={style.skills__wrapper}>
                {
                  item.array.map((skill, j) => {
                    return (
                      <p key={j} className={style.skill__item}>
                        {skill}
                      </p>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default Skills;

Skills.propTypes = {
  data: PropTypes.object.isRequired 
};