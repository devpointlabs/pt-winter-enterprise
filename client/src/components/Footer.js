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


const Footer = () => (

 <NavContainer>
    {/* <img src={logo} className="App-logo" alt="logo" /> */}
     <NavLink to='/contact'>
       <MenuItem>
         Contact Us
       </MenuItem>
     </NavLink>
     <NavLink to='/rooms'>
       <MenuItem>
         Stay
       </MenuItem>
     </NavLink>
   </NavContainer>
);

export default Footer;