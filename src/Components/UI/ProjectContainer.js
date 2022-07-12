import React from "react";
import classes from "./ProjectContainer.module.css";

function ProjectContainer(props) {
  return <div className={classes.projectContainer}>{props.children}</div>;
}

export default ProjectContainer;
