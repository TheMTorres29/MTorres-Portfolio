import React from "react";
import Typed from "react-typed";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-wrapper">
        <div className="main-info">
            <h1>My Web Dev Site</h1>
            <Typed
                className="typed-text"
                strings={["Web Development", "Web Design", "Graphic Design", "Smash Ultimate"]}
                typeSpeed={40}
                backSpeed={60}
                loop
            />
            <Link to="/contact" className="btn-contact-me">Contact Me</Link>
        </div>
    </div>
  )
}

export default Header