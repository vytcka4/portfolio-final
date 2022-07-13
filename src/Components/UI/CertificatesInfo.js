import classes from "./CertificatesInfo.module.css";

function CertificatesInfo(props) {
  return (
    <p className={classes["p"]}>
      {`${props.name} : `}
      <button>
        <a href={props.link} target="blank">
          Certificate
        </a>
      </button>
    </p>
  );
}

export default CertificatesInfo;
