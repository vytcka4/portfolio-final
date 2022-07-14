import classes from "./Projects.module.css";
import ProjectContainer from "../UI/ProjectContainer";
import ProjectDescription from "../UI/ProjectDescription";
import bankistWeb from "../store/bankistWeb.png";
import mapty from "../store/mapty.png";

function Projects() {
  return (
    <div className={classes.allProjects} id="projects">
      <h2 className={classes.projects}>Projects</h2>
      <ProjectContainer>
        <div className={classes.imgContainer}>
          <a href="https://vytcka4.github.io/bankist-website/" target="blank">
            <img src={bankistWeb} alt="bankist" />{" "}
          </a>
        </div>
        <ProjectDescription
          descprition={"HTML5 ,CSS, javaSript"}
          name={"Bankist"}
          code={"https://github.com/vytcka4/bankist-website"}
        ></ProjectDescription>
      </ProjectContainer>
      <ProjectContainer>
        <div className={classes.imgContainer}>
          <a href="https://vytcka4.github.io/Mapty/" target="blank">
            <img src={mapty} alt="mapty" />
          </a>
        </div>
        <ProjectDescription
          descprition={"HTML5 ,CSS, javaSript"}
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
