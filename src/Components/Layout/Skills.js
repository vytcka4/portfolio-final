import classes from "./Skills.module.css";
import bootstrap from "../store/bootstrap.png";
import js from "../store/js.png";
import css from "../store/css.png";
import html from "../store/html.png";
import node from "../store/node.png";
import python from "../store/python.png";
import react from "../store/react.png";
import mySql from "../store/mySql.png";

import { DiGit } from "react-icons/di";

import { TbBrandNextjs } from "react-icons/tb";
import { SiFigma } from "react-icons/si";

function Skills() {
  return (
    <div className={classes.skills}>
      <h2>Main skills:</h2>
      <div className={classes.main}>
        <img src={html} alt="html"></img>
        <img src={css} alt="css"></img>
        <img src={js} alt="javascript"></img>
        <img src={react} alt="react"></img>
      </div>
      <h2>Other knowledge:</h2>
      <div className={classes.other}>
        <DiGit />
        <img src={bootstrap} alt="botstrap"></img>
        <img src={python} alt="python"></img>
        <img src={node} alt="node"></img>
        <TbBrandNextjs />
        <img src={mySql} alt="mySql"></img>
        <SiFigma />
      </div>
    </div>
  );
}

export default Skills;
