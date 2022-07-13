import classes from "./Skills.module.css";
import {
  DiJavascript,
  DiHtml5,
  DiCss3,
  DiReact,
  DiGit,
  DiPython,
  DiNodejs,
} from "react-icons/di";

import { TbBrandNextjs } from "react-icons/tb";
import { SiMysql, SiFigma } from "react-icons/si";

function Skills() {
  return (
    <div className={classes.skills}>
      <h2>Main skills:</h2>
      <div className={classes.main}>
        <DiCss3 />
        <DiHtml5 />
        <DiJavascript />
        <DiReact />
      </div>
      <h2>Other knowledge:</h2>
      <div className={classes.other}>
        <DiGit />
        <DiPython />
        <DiNodejs />
        <TbBrandNextjs />
        <SiMysql />
        <SiFigma />
      </div>
    </div>
  );
}

export default Skills;
