import React from "react";
import PropTypes from "prop-types";
import SectionHead from "#components/SectionHead/SectionHead";
import SectionContent from "#components/SectionContent/SectionContent";
import style from "./Section.module.css";


function Section({data}) {
  return (
    <section className={`${style.section__wrapper} ${data.id}`} id={data.id}>
      <SectionHead data={data}/>
      <SectionContent data={data}/>
    </section>
  );
}

export default Section;

Section.propTypes = {
  data: PropTypes.object.isRequired 
};