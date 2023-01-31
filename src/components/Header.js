import React, { useState } from 'react';
import Navigation from "./Navigation";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';

function Header() {
  const [currentPage, handlePageChange] = useState("About");

  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <div className="head has-background-info">
        <nav className="navbar-left">
          <div className="navbar-brand">
            <a
              className="navbar-item"
              rel="noreferrer"
              target="_blank"
              href="https://github.com/wolfjfly?tab=repositories"
            >
              <span className="head-name">Benjamin Wolf <FontAwesomeIcon icon={faSquareGithub}></FontAwesomeIcon></span>
            </a>
          </div>
        </nav>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
      </div>
      <main>
        <div className='renderPage'>{renderPage(currentPage)}</div>
      </main>
    </div>
  );
}

export default Header;
