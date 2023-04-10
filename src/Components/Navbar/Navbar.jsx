import './navbar.css';
import React from 'react';
import {Link} from 'react-router-dom';
import Dropdown from './Dropdown/Dropdown';
import Title from '../Navbar/Sections/Title';



const Navbar = React.memo(() => {
    return (

      <nav className="navbar " role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
      <Link className='nav-link' to="/">
        <img src="../img/logoportfolio.jpg" id="logo" alt="logo" width={80}/>
      </Link>
        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a href='#about'className="navbar-item is-size-4">
            About me
          </a>
          <a class="navbar-item is-size-4">
            Contact
          </a>
        </div>
        <div className="navbar-end">
              <a href='#portfolio' id='portfolio-button' className="navbar-item is-size-4">Discover my work</a>
        </div>
      </div>
    </nav>
    )
  })

  export default Navbar

