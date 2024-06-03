import React from "react";
import PropTypes from "prop-types";
import style from "./Projects.module.css";


function Projects({data}) {
  return (
    <div className={style.projects}>
      <ul className={style.projects__list}>
        {
          [...data.content].map((item, i) => {
            return (
              <li key={i} className={style.projects__item} style={{backgroundImage: `url(${item.cover})`}}>
                <div className={style.projects__btn}>
                  <a className={style.projects__link} href={item.link} target="_blank" rel="noreferrer">
                    {item.title}
                  </a>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default Projects;

Projects.propTypes = {
  data: PropTypes.object.isRequired 
};