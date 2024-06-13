import React from 'react';
import './MainDash.css';

function MainDash() {
  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <div className="left-images">
          <img src="left-image1.png" alt="Left Image 1" className="left-image" />
          <img src="left-image2.png" alt="Left Image 2" className="left-image" />
        </div>
        <div className="center-title">
          Multi-Band GNSS Assisted Navigation System
        </div>
        <div className="right-image">
          <img src="right-image.png" alt="Right Image" className="right-image" />
        </div>
      </nav>
      <div className="saras-container">
        <div className="saras-title">
          <div><span className='saras-text'>SARAS</span> BY</div>
          <div className='mct-title'>Military College Of Telecommunication & Engineering</div>
        </div>
        <hr className='divider' />
      </div>
      <div className="button-container">
        <div className="left-buttons">
          <button className="team-btn">Team</button>
          <button className="GNNS-btn">GNNS RX</button>
        </div>
        <div className="right-buttons">
          <button className="GPS-btn">GPS TX</button>
          <button className="Doc-btn">DOC</button>
        </div>
      </div>

      <div className="dashboard-content">
        {/* Add your dashboard content here */}
      </div>
    </div>
  );
}

export default MainDash;
