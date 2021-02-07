import React from 'react';
import { Navbar, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";


function Navigation(props) {
  return (
    <div>
      <Navbar expand="lg" bg="light" sticky="top">
        <NavLink className="nav-link" to="/" >
          <div class="text-dark">
            <h4 class="nav-title-font">Cristian Acevedo</h4>
            <Image
              width={50}
              src={logo} fluid
              alt="developer logo" />
          </div>
        </NavLink>
        <ul class="navbar-nav ml-auto navitem-indent">
          <li class="nav-item">
            <NavLink to="/about">
              <div class="nav-font text-dark">Who am I?</div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/traits">
              <div class="nav-font text-dark">Traits and Skills</div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/projects">
              <div class="nav-font text-dark">Projects</div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/contact">
              <div class="nav-font text-dark">Contact Me</div>
            </NavLink>
          </li>
        </ul>
      </Navbar>
    </div>
  );
}

export default Navigation;