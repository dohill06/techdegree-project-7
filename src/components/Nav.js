import React from 'react';
import {NavLink} from 'react-router-dom';
// navigation links for header
const Nav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink exact to='/'>Home</NavLink></li>
        <li><NavLink to='/cats'>Cats</NavLink></li>
        <li><NavLink to='/dogs'>Dogs</NavLink></li>
        <li><NavLink to='/computers'>Computers</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;