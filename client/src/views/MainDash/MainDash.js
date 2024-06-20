import React from 'react';
import './MainDash.css';
import item from './item.png';
import question from './question.png';
import setting from './setting.png';
import teamIcon from './team.png';
import docIcon from './doc.png';
import logo from './logo.png'; 

function MainDash() {
  const openWetty = () => {
    window.open('http://localhost:3002', '_blank');
  };

  return (
    <div className="dashboard-container">
      <nav className="navbar">
        <div className="left-images">
          <img src={item} alt="Left Image 1" className="left-image" />
          <img src={question} alt="Left Image 2" className="left-image" />
        </div>
        <div className="center-title">
          Multi-Band GNSS Navigation System
        </div>
        <div className="right-image">
          <img src={setting} alt="Right Image" className="setting-image" />
        </div>
      </nav>
      <div className="saras-container">
        <div className="saras-title">
          <div><span className='saras-text'>SARAS</span> BY</div>
          <div className='mct-title'>Military College Of Telecommunication Engineering</div>
        </div>
        <hr className='divider' />
        <svg width="200" height="50" xmlns="http://www.w3.org/2000/svg" style={{position: "relative", top: "-17px"}}>
          <polygon
            points="0,0 200,0 160,50 40,50"
            style={{ fill: 'white', stroke: 'grey', strokeWidth: 1 }}
          />
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontFamily="sans-serif"
            fontSize="16"
            fill="#4F64AD"
            fontWeight="bold"
          >
            KARKEN RF
          </text>
        </svg>
      </div>
      <div className="button-container">
        <div className="left-buttons">
          <button className="team-btn">
            <img src={teamIcon} alt="Team Icon" className="doc-team-icon" /> TEAM
          </button>
          <button className="GNNS-btn" onClick={openWetty}>GNNS RX</button>
        </div>
        <div className="right-buttons">
          <button className="GPS-btn">GPS TX</button>
          <button className="Doc-btn">
            <img src={docIcon} alt="Doc Icon" className="doc-team-icon" /> DOC
          </button>
        </div>
      </div>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
    </div>
  );
}

export default MainDash;
