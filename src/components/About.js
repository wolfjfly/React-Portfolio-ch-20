
import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Not A Super Hero yet, so trying this instead🤣</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/img/MePic.jpg'} alt=""/>
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
