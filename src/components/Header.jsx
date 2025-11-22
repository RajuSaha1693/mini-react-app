import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>🚀 Docker React Demo</h1>
        <p>Learn Containerization & Dockerization</p>
        <div className="tech-badges">
          <span className="badge">React</span>
          <span className="badge">Docker</span>
          <span className="badge">Containerization</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
