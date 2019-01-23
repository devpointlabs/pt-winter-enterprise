import React from 'react';
import {NavLink, } from 'react-router-dom';
import { Menu, } from 'semantic-ui-react';




const Navbar = () => (
  <Menu>
    <NavLink to="./components/home">
      <Menu.Item>
        Home
      </Menu.Item>
    </NavLink>
    <NavLink to="./compoments/packages">
      <Menu.Item>
        Packages
      </Menu.Item>
    </NavLink>
    <NavLink to="./components/contact">
      <Menu.Item>
        Contact Us
      </Menu.Item>
    </NavLink>
  </Menu>
);

export default Navbar;





