import React from 'react';
import {NavLink, } from 'react-router-dom';
import {} from 'semantic-ui-react';
import styled from 'styled-components';


const NavContainer = styled.div`
background-color: black;
height: 8px;
padding: 25px;
text-align: right;
display: block;
position: fixed;
bottom: 0;
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


const Footer = () => (

  <NavContainer>
     <NavLink to='/reservations'>
        <MenuItem>
           Stay 
        </MenuItem>
     </NavLink>
      <NavLink to='/contact'>
        <MenuItem>
          Contact Us
        </MenuItem>
      </NavLink>
      <LogoContainer>
      Enterprise International
      </LogoContainer>
   </NavContainer>
);

export default Footer;