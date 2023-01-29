import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "Progressive-web-app-ch-19",
    description: "Your task is to build a text editor that runs in the browser. The app will be a single-page application that meets the PWA criteria. Additionally, it will feature a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application will also function offline.",
    repo: "https://github.com/wolfjfly/Progressive-web-app-ch-19",
  },
  {
    id: 1,
    title: "NoSQL Challenge: Social Network API Challenge-18",
    description: "Your challenge is to build an API for a social network web application where users can share their thoughts, react to friends thoughts, and create a friend list. You ll use Express.js for routing, a MongoDB database, and the Mongoose ODM.",
    repo: "https://github.com/wolfjfly/social-network-API-challenge-18",
  },
  {
    id: 2,
    title: "Regex Tutorial / Computer Science Challenge 17",
    description: "This tutorial will walk through how regex can be applied to match email addresses using the expression",
    repo: "https://github.com/wolfjfly/Computer-Science-challenge-17",
  },
  {
    id: 3,
    title: "It Takes a Village",
    description: "As a citizen who cares about their community, I want a website so that community members in need may request material goods and another community member may fulfill this need.",
    repo: "https://github.com/wolfjfly/Project-2-group-K",
  },
  {
    id: 4,
    title: "E-commerce-Back-End-Challenge-13",
    description: "Your challenge is to build the back end for an e-commerce site. Youll take a working Express.js API and configure it to use Sequelize to interact with a MySQL database",
    repo: "https://github.com/wolfjfly/E-commerce-Back-End-Challenge-13",
  },
  {
    id: 5,
    title: "README-challenge-9-bw",
    description: "AS A developer I WANT a README generator SO THAT I can quickly create a professional README for a new project",
    repo: "https://github.com/wolfjfly/README-challenge-9-bw",
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
