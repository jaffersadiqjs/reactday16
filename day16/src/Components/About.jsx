import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const About = () => (
  <div>
    <h2>ℹ️ About Us</h2>
    <nav>
      <Link to="team">Team</Link> | <Link to="company">Company</Link>
    </nav>
    <Outlet />
  </div>
);

export default About;
