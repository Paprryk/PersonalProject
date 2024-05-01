// Navbar.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Form } from 'react-bootstrap';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="#introduction">Introduction</a></li>
        <li><a href="#technical-skills">Technical Skills</a></li>
        <li><a href="#work-history">Work History</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#references">References</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
