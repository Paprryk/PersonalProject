import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const NavigationBar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const getLinkStyles = (link) => {
    return {
      color: 'white',
      fontWeight: activeLink === link ? 'bold' : 'normal'
    };
  };

  return (
    <div className="sticky-top d-flex justify-content-center p-1">
      <Navbar className="bg-dark rounded">
        <Nav className="justify-content-center">
          <Nav.Link
            href="#introduction"
            style={getLinkStyles('introduction')}
            onClick={() => handleLinkClick('introduction')}
          >
            Introduction
          </Nav.Link>
          <Nav.Link
            href="#technical-skills"
            style={getLinkStyles('technical-skills')}
            onClick={() => handleLinkClick('technical-skills')}
          >
            Technical Skills
          </Nav.Link>
          <Nav.Link
            href="#work-history"
            style={getLinkStyles('work-history')}
            onClick={() => handleLinkClick('work-history')}
          >
            Work History
          </Nav.Link>
          <Nav.Link
            href="#projects"
            style={getLinkStyles('projects')}
            onClick={() => handleLinkClick('projects')}
          >
            Projects
          </Nav.Link>
          <Nav.Link
            href="#education"
            style={getLinkStyles('education')}
            onClick={() => handleLinkClick('education')}
          >
            Education
          </Nav.Link>
          <Nav.Link
            href="#references"
            style={getLinkStyles('references')}
            onClick={() => handleLinkClick('references')}
          >
            References
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavigationBar;