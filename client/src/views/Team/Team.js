import React from 'react';
import './Team.css';
import logo from './logo.png';
import geo from './geo.png';
import dristhi from './drishti.png';
import livinart from './livinart.png';
import backArrow from './back-arrow.png';

const Team = () => {
  return (
    <div className="team-page">
      <img src={backArrow} alt="Back" className="back-arrow" onClick={()=>{
        window.location.href = './mainDash';
      }}/>
      <button>
      </button>
      <div className="content">
        <svg width="200" height="50" xmlns="http://www.w3.org/2000/svg" style={{ position: "relative", top: "-17px" }}>
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
            TEAM
          </text>
        </svg>
        <div className="logo-container">
          <div className="line"></div>
          <img src={logo} alt="Logo" className="logo" />
          <div className="line"></div>
        </div>

        <div className="team-members">
          <div className="team-member">
            <p className="name">Lt. Col Anil <br />Jangral</p>
            <p className="position">Student Officer</p>
          </div>
          <div className="team-member">
            <p className="name">Prof. (Dr.) Rajesh <br />M Bodade</p>
            <p className="position">Project Incharge</p>
          </div>
          <div className="team-member">
            <p className="name">Faculty Of <br /> Communication <br /> Engineering</p>
            <p className="position">Faculty</p>
          </div>
        </div> 

        <hr className="separator" />

        <div className="collaborators-section">
          <p className="collab-text">COLLABORATORS</p>
          <div className="company-logos">
            <img src={geo} alt="Company Logo 1" className="company-logo geo-logo" />
            <img src={dristhi} alt="Company Logo 2" className="company-logo dristhi-logo" />
            <img src={livinart} alt="Company Logo 3" className="company-logo livinart-logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
