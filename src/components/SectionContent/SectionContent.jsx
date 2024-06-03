import React from "react";
import About from "#components/About/About";
import Skills from "#components/Skills/Skills";
import Contacts from "#components/Contacts/Contacts";
import Language from "#components/Language/Language";
import Projects from "#components/Projects/Projects";
import Education from "#components/Education/Education";
import Experience from "#components/Experience/Experience";
import PropTypes from "prop-types";


function SectionContent({data}) {
  const sections = [
    {id: "about", detail: About},
    {id: "experience", detail: Experience},
    {id: "skills", detail: Skills},
    {id: "projects", detail: Projects},
    {id: "education", detail: Education},
    {id: "language", detail: Language},
    {id: "contacts", detail: Contacts},
  ];

  const Component = sections.filter(item => item.id === data.id)[0].detail;


  return (
    <>
      <Component data={data} />
    </>
  );
}

export default SectionContent;

SectionContent.propTypes = {
  data: PropTypes.object.isRequired 
};