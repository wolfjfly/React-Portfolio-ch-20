import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faNode, faReact  } from '@fortawesome/free-brands-svg-icons';

function Resume() {
  return (
    <div className="columns">
      <div className="column">
        <p className="resume">Resume</p>
        <hr />
        <a
          className="button is-primary"
          href={process.env.PUBLIC_URL + "/fake-resume.pdf"}
          target="_blank" rel="noreferrer"
        >
          <span className="icon">
            <i className="fas fa-download"></i>
          </span>
          <span>Download Resume</span>
        </a>
      </div>
      <div className="column">
        <p className="proficiencies">Proficiencies</p>
        <hr />
        <ul>
            <li>JavaScript <FontAwesomeIcon icon={faJs}></FontAwesomeIcon></li>
            <li>Node <FontAwesomeIcon icon={faNode}></FontAwesomeIcon></li>
            <li>SQL</li>
            <li>MongoDB</li>
            <li>React <FontAwesomeIcon icon={faReact}></FontAwesomeIcon></li>
            <li>Studio 5000</li>
            <li>Fanuc Robotics</li>
            <li>PTC Creo</li>
            <li>SolidWorks</li>
            <li>Industrial Automation Design</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
