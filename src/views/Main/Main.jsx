import React from "react";
import { useResize } from "#hooks/useResize";
import getData from "#utils/getData";
import Avatar from "#components/Avatar/Avatar";
import Section from "#components/Section/Section";
import style from "./Main.module.css";


function Main() {
  const { isScreen1024 } = useResize();


  return (
    <main className={style.main}>
      {
        isScreen1024 ? 
        <>
          <Avatar data={getData("avatar")}/>
          <Section data={getData("experience")}/>
          <Section data={getData("skills")}/>
          <Section data={getData("projects")}/>
          <Section data={getData("about")}/>
          <Section data={getData("education")}/>
          <Section data={getData("language")}/>
          <Section data={getData("contacts")}/>
        </> :
        <>
          <div className={`${style.main__block} ${style.main__left}`}>
            <Avatar data={getData("avatar")}/>
            <Section data={getData("about")}/>
            <Section data={getData("skills")}/>
            <Section data={getData("education")}/>
            <Section data={getData("language")}/>
            <Section data={getData("contacts")}/>
          </div>
          <div className={`${style.main__block} ${style.main__right}`}>
            <Section data={getData("experience")}/>
            <Section data={getData("projects")}/>
          </div>
        </>
      }
    </main>
  );
}

export default Main;