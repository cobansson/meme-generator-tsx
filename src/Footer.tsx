import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJsSquare } from "@fortawesome/free-brands-svg-icons";
import typeScriptImg from "./images/typescript.png";

export default function Footer() {
  return (
    <footer>
      <h1>Powered by</h1>
      <div className="logo-container">
        <FontAwesomeIcon icon={faReact} className="react-logo" spin />
        <FontAwesomeIcon icon={faJsSquare} className="js-logo" />
        <img src={typeScriptImg} className="ts-logo"/>
      </div>
    </footer>
  );
}
