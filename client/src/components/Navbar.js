import React from 'react';
import {NavLink, } from 'react-router-dom';
import { } from 'semantic-ui-react';
import styled from 'styled-components';

const Navbar = () => (

  <NavContainer>
     <NavLink to='/about'>
        <MenuItem>
           About 
        </MenuItem>
     </NavLink>
      <NavLink to='/rooms'>
        <MenuItem>
          Rooms
        </MenuItem>
      </NavLink>
      <NavLink to='/'>
        <MenuItem>
          Home
        </MenuItem>
      </NavLink>
      <LogoContainer>
      Enterprise International
      </LogoContainer>
   </NavContainer>
  
);

const NavContainer = styled.div`
background-color: black;
height: 8px;
padding: 25px;
text-align: right;
display: block;
position: fixed;
top: 0;
width: 100%;
`
const MenuItem = styled.div`
float: right;
display: block;
margin-right: 50px;
color: #FFFFFF;
` 
const LogoContainer = styled.div`
float: left;
color: #FFFFFF;

`

export default Navbar;