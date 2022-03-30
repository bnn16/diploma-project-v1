import React, { useState } from 'react';
import { MenuItems } from './MenuItems.js';
import './Navbar.css';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="NavbarItem">
      <h1 className="navbar-logo">
        <a className="navbar-logo" href="/">
          KTT
          <i id="comp" className="fa-solid fa-computer"></i>
        </a>
      </h1>
      <div className="menu-icon" onClick={clickHandler}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
