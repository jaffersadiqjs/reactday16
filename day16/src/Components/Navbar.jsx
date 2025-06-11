import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navStyle = ({ isActive }) => ({
    color: isActive ? 'green' : 'black',
    fontWeight: isActive ? 'bold' : 'normal',
  });

  return (
    <nav style={{ marginBottom: '1rem' }}>
      <NavLink to="/" end style={navStyle}>
        Home
      </NavLink>{' '}
      |{' '}
      <NavLink to="/about" style={navStyle}>
        About
      </NavLink>{' '}
      |{' '}
      <NavLink to="/protected" style={navStyle}>
        Protected
      </NavLink>
    </nav>
  );
};

export default Navbar;
