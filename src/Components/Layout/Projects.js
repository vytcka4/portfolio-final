import classes from "./Projects.module.css";
import ProjectContainer from "../UI/ProjectContainer";
import ProjectDescription from "../UI/ProjectDescription";

const bankist = <p></p>;

function Projects() {
  return (
    <div className={classes.allProjects}>
      <ProjectContainer>
        <div className={classes.imgContainer}></div>
        <ProjectDescription
          name={"Bankist"}
          code={"https://github.com/vytcka4/bankist-website"}
        ></ProjectDescription>
      </ProjectContainer>
      <ProjectContainer>
        <div className={classes.imgContainer}></div>
        <ProjectDescription
          name={"Mapty"}
          code={"https://github.com/vytcka4/Mapty"}
        ></ProjectDescription>
      </ProjectContainer>
      <ProjectContainer></ProjectContainer>
      <ProjectContainer></ProjectContainer>
    </div>
  );
}

export default Projects;
