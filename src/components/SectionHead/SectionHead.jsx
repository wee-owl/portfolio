import React from "react";
import PropTypes from "prop-types";
import SVGicon from "#components/SVGicon/SVGicon";
import style from "./SectionHead.module.css";


function SectionHead({data}) {
  return (
    <>
      <div className={style.section__wrapper}>
        <div className={style.section__icon}>
          <SVGicon name={data.icon}/>
        </div>
        <div className={style.section__title_wrap}>
          <h2 className={style.section__title}>{data.title}</h2>
        </div>
      </div>
      <div className={style.section__decor_line}></div>
    </>
  );
}

export default SectionHead;

SectionHead.propTypes = {
  data: PropTypes.object.isRequired 
};