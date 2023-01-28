
import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">MY title</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/img/Avatar.jpg'} alt=""/>
      <p className="content is-italic mt-4">
        WHO AM I ????????????????????????????
      </p>
      <p className="content">
        BIO
      </p>
    </div>
  );
}

export default About;
