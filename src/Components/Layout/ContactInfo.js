import classes from "./ContactInfo.module.css";
import { TbBrandLinkedin } from "react-icons/tb";

function ConatactInfo() {
  return (
    <div className={classes.contact}>
      <h2>Contact Info : </h2>
      <h3>Email : vytautas.sidabras@gmail.com</h3>
      <h3>Phone : +37062215652</h3>
      <h3>
        Linkedin : https://www.linkedin.com/in/vytautas-sidabras-875991204/
      </h3>
    </div>
  );
}

export default ConatactInfo;
