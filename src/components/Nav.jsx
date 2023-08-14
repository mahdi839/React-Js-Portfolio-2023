import React from 'react'
import {  NavLink } from "react-router-dom";
import logo from '../web-logo.png'
import {GiHamburgerMenu} from 'react-icons/gi'
export default function Nav() {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-dark ">
    <div class="container-fluid ">
      <a class="navbar-brand" href="/"> <img src={logo} alt={logo} width={150}  /> </a>
      <button class="navbar-toggler nav-btn " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <GiHamburgerMenu className='nav-icon'/>
      </button>
      <div class="collapse navbar-collapse " id="navbarNav">
        <ul class="navbar-nav ms-auto  ">
          <li class="nav-item">
          <NavLink  to="/"  className={({ isActive}) =>
           isActive ? "active" : ""
        }>Home</NavLink>
          </li>
          <li class="nav-item">
          <NavLink  to="/about">About</NavLink>
          </li>
          <li class="nav-item">
          <NavLink class="nav-link" to="/skills">Skills</NavLink>
          </li>
          <li class="nav-item">
          <NavLink to="/contact">Contact</NavLink>
        </li>
        </ul>
      </div>
    </div>
  </nav>
    </>
  )
}
