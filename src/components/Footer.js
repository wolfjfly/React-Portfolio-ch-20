import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <footer className="footer has-background-info">
      <div className="content has-text-centered">
        <p>
          <strong className="OneFooter">My Full Stack Development Portfolio</strong>
          <p className="TwoFooter"> React site Developed by{" "} </p>
          <a className="nameFooter" href="https://github.com/wolfjfly" target="_blank" rel="noreferrer">Benjamin Wolf <FontAwesomeIcon icon={faGithubAlt}></FontAwesomeIcon></a>
          <hr />
          <a 
            href="https://www.linkedin.com/in/benjamin-wolf-a89ab181/"
            target="_blank" rel="noreferrer"
          >
            <div className="iconFooter">LinkedIn  <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></div>
            
          </a>{" "}
          {" "}{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
