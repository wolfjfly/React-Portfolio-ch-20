
import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Not A Super Hero yet, so trying this instead🤣</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/img/MePic.jpg'} alt=""/>
      <p className="content is-italic mt-0 mb-0">I am an Industrial Automations Specialist, with a thirst for knowledge and the drive to be able to accomplish any project.</p>
      <p className="content is-italic mt-0 mb-0"> With the skills and knowledge that I received from this full stack web development course,</p>
      <p className="content is-italic mt-0 mb-0">I will be able to provide customers a turnkey integration solution to meet all of there needs. 
      </p>
    </div>
  );
}

export default About;
