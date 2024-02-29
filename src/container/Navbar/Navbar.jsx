// Navbar.jsx
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import image1 from '../../assets/team-member-1.jpg';
import image2 from '../../assets/team-member-2.jpg';

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [showTeamMembers, setShowTeamMembers] = useState(false);

  useEffect(() => {
    const checkDeviceType = () => {
      const isMobileDevice = window.innerWidth <= 630;
      setIsMobile(isMobileDevice);
    };

    // Check device type on mount and on window resize
    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);

    // Clean up event listener
    return () => {
      window.removeEventListener('resize', checkDeviceType);
    };
  }, []);

  const handleHover = () => {
    if (!isMobile) {
      setShowTeamMembers(true);
    }
  };

  const handleLeave = () => {
    setShowTeamMembers(false);
  };

  const handleClick = () => {
    if (isMobile) {
      setShowTeamMembers(!showTeamMembers);
    }
  };

  return (
    <div className={`navbar ${showTeamMembers ? 'show-team' : ''}`} >
      <div className="team navbar-item" onMouseEnter={handleHover} onClick={handleClick}>
        TEAM
      </div>
      <div className="inquiry navbar-item">
        INQUIRY
      </div>     
      {showTeamMembers && (
        <div className="team-info" onMouseLeave={handleLeave}>
          <div className="member">
            <img src={image1} alt="Team Member 1" />
            <p>Andrei Tudorache</p>
            <a href="linkedin.com/johndoe">LinkedIn</a>
          </div>
          <div className="member">
            <img src={image2} alt="Team Member 2" />
            <p>Theodor Tanase</p>
            <a href="linkedin.com/janesmith">LinkedIn</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
