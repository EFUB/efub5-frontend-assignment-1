import React from 'react';
import { NavLink } from 'react-router-dom';
function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">My App</div>
      <div className="navbar-links">
        <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          To do List
        </NavLink>
        <NavLink to="/clock" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          Current Time
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
