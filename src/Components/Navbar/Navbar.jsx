import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (<>
  
  <nav className="navbar navbar-expand-lg nav fixed-top z-1">
  <div className="container-fluid">
    <Link className="navbar-brand ms-4 p-4 text-uppercase fw-bold fs-2 text-white" to="/">start framework</Link>
    <button className="navbar-toggler me-5" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse p-4 me-5 " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item px-2">
          <NavLink className="nav-link text-white fw-bold text-uppercase" aria-current="page" to="about">About</NavLink>
        </li>
        <li className="nav-item px-2">
          <NavLink className="nav-link text-white fw-bold text-uppercase" to="protfolio">Protfolio</NavLink>
        </li>
        <li className="nav-item px-2">
          <NavLink className="nav-link text-white fw-bold text-uppercase" to="contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </>
  )
}
