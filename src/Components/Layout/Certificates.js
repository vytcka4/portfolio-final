import classes from "./Certificates.module.css";
import CertificatesNames from "../store/CertificatesNames";
import CertificatesInfo from "../UI/CertificatesInfo";

function Certificates() {
  return (
    <div className={classes.certificates}>
      <h2>Certificates:</h2>
      <CertificatesInfo
        name={CertificatesNames.name.python}
        link={CertificatesNames.link.python}
      />
      <CertificatesInfo
        name={CertificatesNames.name.pythonDataStructures}
        link={CertificatesNames.link.pythonDataStructures}
      />
      <CertificatesInfo
        name={CertificatesNames.name.javaSCript}
        link={CertificatesNames.link.javaSCript}
      />
      <CertificatesInfo
        name={CertificatesNames.name.htmlCss}
        link={CertificatesNames.link.htmlCss}
      />
      <CertificatesInfo
        name={CertificatesNames.name.leadingTeams}
        link={CertificatesNames.link.leadingTeams}
      />
      <CertificatesInfo
        name={CertificatesNames.name.learning}
        link={CertificatesNames.link.learning}
      />
    </div>
  );
}

export default Certificates;
