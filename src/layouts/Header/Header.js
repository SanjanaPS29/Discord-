import React from 'react';
import { Link } from 'react-router-dom';
import {HeaderStyle,Logo,ButtonStyle,IconStyle} from './Header.style';
import Navbar from './Navbar/Navbar';
import discord1 from '../../assets/dis.jfif';

 function Header() {
  return (
  <HeaderStyle>
    <Logo>  <div> <h2>Discord</h2></div><div><img src={discord1} width="90%" alt="discord icon" /></div>
  
    </Logo>
    <Navbar></Navbar>
    <Link to="/login"><ButtonStyle>Login</ButtonStyle></Link>
  </HeaderStyle>
  );
}

export default Header;