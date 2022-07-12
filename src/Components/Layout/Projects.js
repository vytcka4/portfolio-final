import classes from "./Projects.module.css";
import ProjectContainer from "../UI/ProjectContainer";

function Projects() {
  return (
    <div className={classes.allProjects}>
      <ProjectContainer></ProjectContainer>
      <ProjectContainer></ProjectContainer>
      <ProjectContainer></ProjectContainer>
      <ProjectContainer></ProjectContainer>
    </div>
  );
}

export default Projects;
