import React from "react";
import PropTypes from "prop-types";
import style from "./About.module.css";


function About({data}) {
  return (
    <p className={style.about}>
      {data.content.text}
    </p>
  );
}

export default About;

About.propTypes = {
  data: PropTypes.object.isRequired 
};