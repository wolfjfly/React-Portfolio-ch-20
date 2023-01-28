import React from "react";

function Resume() {
  return (
    <div className="columns">
      <div className="column">
        <p className="content is-medium">Resume</p>
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
        <p className="content is-medium">Skills</p>
        <hr />
        <ul>
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum </li>
            <li>consectetur</li>
            <li>consectetur adipiscing elit, sed do</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
