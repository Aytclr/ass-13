
import React from 'react'

import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
   


    // <div>

    //   <nav class="nav">
    //     <ul class="nav__list">
    //       <li class="nav__item">
    //         <a href="index.html" class="nav__link nav__link--active">Home</a>
    //       </li>
    //       <li class="nav__item">
    //         <a href="about.html" class="nav__link">About Me</a>
    //       </li>
    //       <li class="nav__item">
    //         <a href="projects.html" class="nav__link">My Projects</a>
    //       </li>
    //       <li class="nav__item">
    //         <a href="contact.html" class="nav__link">Contact</a>
    //       </li>
    //     </ul>
    //   </nav>
      
    // </div>

    <div>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink exact to="/" className="nav__link" activeClassName="nav__link--active">
              Home
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/about" className="nav__link" activeClassName="nav__link--active">
              About Me
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/projects" className="nav__link" activeClassName="nav__link--active">
              My Projects
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to="/contact" className="nav__link" activeClassName="nav__link--active">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>







  )
}

export default Navbar





