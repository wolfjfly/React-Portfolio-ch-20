import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "NoSQL Challenge: Social Network API Challenge-18",
    languages: "",
    packages: "",
    image: "",
    description: "Your challenge is to build an API for a social network web application where users can share their thoughts, react to friends thoughts, and create a friend list. You ll use Express.js for routing, a MongoDB database, and the Mongoose ODM.",
    repo: "https://github.com/wolfjfly/Progressive-web-app-ch-19",
    deployed: "https://pwa-ch19-text-editor.herokuapp.com/",
  },
  {
    id: 1,
    title: "NoSQL Challenge: Social Network API Challenge-18",
    languages: "",
    packages: "",
    image: "",
    description: "Your challenge is to build an API for a social network web application where users can share their thoughts, react to friends thoughts, and create a friend list. You ll use Express.js for routing, a MongoDB database, and the Mongoose ODM.",
    repo: "https://github.com/wolfjfly/social-network-API-challenge-18",
    // deployed: "",
  },
  {
    id: 2,
    title: "Regex Tutorial / Computer Science Challenge 17",
    languages: "",
    packages: "",
    image: "",
    description: "This tutorial will walk through how regex can be applied to match email addresses using the expression",
    repo: "https://github.com/Josh236061/clothingurusss",
    // deployed: "",
  },
  {
    id: 3,
    title: "It Takes a Village",
    languages: "",
    image: "",
    packages: "",
    description: "As a citizen who cares about their community, I want a website so that community members in need may request material goods and another community member may fulfill this need.",
    repo: "https://github.com/wolfjfly/Project-2-group-K",
    deployed: "https://lit-castle-82146.herokuapp.com",
  },
  {
    id: 4,
    title: "E-commerce-Back-End-Challenge-13",
    languages: "",
    packages: "",
    image: "",
    description: "Your challenge is to build the back end for an e-commerce site. Youll take a working Express.js API and configure it to use Sequelize to interact with a MySQL database",
    repo: "https://github.com/wolfjfly/E-commerce-Back-End-Challenge-13",
    // deployed: "",
  },
  {
    id: 5,
    title: "README-challenge-9-bw",
    languages: "",
    packages: "",
    image: "",
    description: "AS A developer I WANT a README generator SO THAT I can quickly create a professional README for a new project",
    repo: "https://github.com/wolfjfly/README-challenge-9-bw",
    // deployed: "",
  },
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;
