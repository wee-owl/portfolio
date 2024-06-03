import React from "react";
import PropTypes from "prop-types";
import style from "./Avatar.module.css";


function Avatar({data}) {
  return (
    <section className={style.avatar}>
      <img className={style.avatar__photo} src={data.photo} alt="Avatar" width="150" height="150"></img>
      <h1 className={style.avatar__title}>{data.name}</h1>
      <h2 className={style.avatar__subtitle}>{data.position}</h2>
    </section>
  );
}

export default Avatar;

Avatar.propTypes = {
  data: PropTypes.object.isRequired 
};