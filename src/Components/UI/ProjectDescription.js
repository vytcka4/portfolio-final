import classes from "./ProjectDescription.module.css";
import React from "react";

function ProjectDescription(props) {
  return (
    <div className={classes.container}>
      <h2>{props.name}</h2>
      <button>
        <a href={props.code} target="blank">
          Code
        </a>
      </button>
      <h3>Used Tools :</h3>
      <p>{props.descprition}</p>
    </div>
  );
}

export default ProjectDescription;
