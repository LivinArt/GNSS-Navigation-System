import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import './MainDash.css';
import item from './item.png';
import terminal from './terminal.png';
import setting from './setting.png';
import teamIcon from './team.png';
import docIcon from './doc.png';
import logo from './logo.png';
import NestedMenu from '../../components/NestedMenu/NestedMenu';
import GnnsRxNestedMenu from '../../components/GnnsRxNestedMenu/GnnsRxNestedMenu';

function MainDash() {
  const openWetty = () => {
    window.open('http://localhost:3002', '_blank');
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [website, setWebsite] = useState(localStorage.getItem('website') || '');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [updatedWebsite, setUpdatedWebsite] = useState(website);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  function convertToProperUrl(inputUrl) {
    let domain = inputUrl.replace('www.', '').replace('http://', '').replace('https://', '');
    return `https://${domain}`;
}

  const handleUpdate = () => {

    const properUrl = convertToProperUrl(website);

    console.log(`Website updated to: ${properUrl}`);
    localStorage.setItem('website', properUrl);
    setUpdatedWebsite(properUrl);
    setWebsite(properUrl);
    toast.success('Website updated successfully!');
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const dropdownRef = useRef(null);

  const handleDropdownIconClick = (event) => {
    event.stopPropagation();
    toggleDropdown();
  };

  const openGnnsRx = () => {
    window.location.href = 'http://127.0.0.1/script/api/1.php';
  };

  const openGpxTx = () => {
    window.location.href = 'http://127.0.0.1/script/api/3.php';
  };

  return (
    <div className="dashboard-container">
      <Toaster />
      <nav className="navbar">
        <div className="left-images">
          <img src={item} alt="Left Image 1" className="left-image" />
          <img src={terminal} alt="Left Image 2" className="left-image" />
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
          <div><span className="saras-text">SARAS</span> BY</div>
          <div className="mct-title">Military College Of Telecommunication Engineering</div>
        </div>
        <hr className="divider" />
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
            fontWeight="bold">
            KARKEN RF
          </text>
        </svg>
        <div className="input-update-container">
          <div className="input-box">
            <div className="small-input-box">
              <input
                type="text"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                className="small-input"
              />
            </div>
            <div className="small-input-box">
              <input
                type="text"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
                className="small-input"
              />
            </div>
            <input
              type="text"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              placeholder="127.0.0.1:8080"
              className="website-input"
            />
          </div>
          <button onClick={handleUpdate} className="update-btn">Update</button>
        </div>
      </div>
      <div className="button-container">
        <div className="left-buttons">
          <Link to="/team" className="team-btn">
            <img src={teamIcon} alt="Team Icon" className="doc-team-icon" /> <span className='btn-text'>TEAM</span>
          </Link>
         <div>
         <GnnsRxNestedMenu />
         </div>
        </div>
        <div className="right-buttons">
          <button className="GPS-btn" onClick={openGpxTx}><span className='btn-text'>GPS TX</span></button>
          <NestedMenu />
        </div>
      </div>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      {updatedWebsite && (
        <div className="website-display">
          <iframe src={updatedWebsite} title="Website Display" className="website-iframe"></iframe>
        </div>
      )}
    </div>
  );
}

export default MainDash;
