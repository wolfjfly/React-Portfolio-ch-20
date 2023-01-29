import React, { useState } from 'react';
import Navigation from "./Navigation";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

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
              <span className="head-name">Benjamin Wolf</span>
            </a>
          </div>
        </nav>
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
      </div>
      <main>
        <div>{renderPage(currentPage)}</div>
      </main>
    </div>
  );
}

export default Header;
