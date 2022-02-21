import React from 'react';
import { Link } from 'react-router-dom';
import {NavbarStyle} from './Navbar.style';


 function Navbar() {
  return (
  <NavbarStyle>
    <li><Link to='/dashboard'>Dashboard</Link></li>
      <li><Link to=''>Download</Link></li>
      <li><Link to=''>Nitro</Link></li>
      <li><Link to=''>Safety</Link></li>
      <li><Link to=''>Support</Link></li>
      <li><Link to=''>Blog</Link></li>
      <li><Link to=''>Careers</Link></li>
  </NavbarStyle>
  );
}


export default Navbar;