import React from 'react';
import './Team.css';
import logo from './logo.png';
import profile from './profile.png';

const Team = () => {
  return (
    <div className="team-page">
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
            TEAM
          </text>
        </svg>
      <div className="logo-container">
        <div className="line"></div>
        <img src={logo} alt="Logo" className="logo" />
        <div className="line"></div>
      </div>

      <div className="team-member">
        <div className="profile-image">
          <img src={profile} alt="Profile" />
        </div>
        <div className="member-info">
          <div className="name">L.t Col Anil Jangral</div>
          <div className="position">Project Director</div>
          <div className="company">MCTE</div>
        </div>
      </div>
      <hr className="member-divider" />

      <div className="team-member">
        <div className="profile-image">
          <img src={profile} alt="Profile" />
        </div>
        <div className="member-info">
          <div className="name">Dr. Rajesh Bodade</div>
          <div className="position">Project Director</div>
          <div className="company">MCTE</div>
        </div>
      </div>
      <hr className="member-divider" />

      <div className="team-member">
        <div className="profile-image">
          <img src={profile} alt="Profile" />
        </div>
        <div className="member-info">
          <div className="name">IIITI DRISHIT CPS Foundation</div>
          <div className="position">Project Director</div>
          <div className="company">IIT Indore</div>
        </div>
      </div>
      <hr className="member-divider" />
    </div>
  );
}

export default Team;
