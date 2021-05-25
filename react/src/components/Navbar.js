import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {

  return (
     
  <nav>
    <div className="nav-wrapper">
          <Link to="/posts" className="brand-logo left">
            Instragram
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/signin">Sign in </Link>
             
            </li>
            <li>
              <Link to="/signup">Sign Up </Link>
             
            </li>
            <li>
              <Link to="/profile">Profile </Link>
             
            </li>
            
          </ul>
    </div>
  </nav>
  )
}
export default Navbar