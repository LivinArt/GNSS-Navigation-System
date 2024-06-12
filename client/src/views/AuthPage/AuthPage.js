import React, { useState } from 'react';
import './AuthPage.css';

function AuthPage() {
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleOtpChange = (index, event) => {
    const newOtp = [...otp];
    newOtp[index] = event.target.value;
    setOtp(newOtp);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <div className="custom-auth-container">
      <div className="system-title">
        Multi-Band GNSS Assisted Navigation System
      </div>
      <form onSubmit={handleSubmit} className="custom-auth-form">
        <div className="form-header-container">
          <div><span className='roger-text'>ROGER</span> BY</div>
          <div className="institution-name">
            <h6>Military College Of Telecommunication & Engineering</h6>
          </div>
          <hr />
        </div>
        <div className="otp-input-container">
          {otp.map((value, index) => (
            <input
              key={index}
              type="text"
              value={value}
              onChange={(event) => handleOtpChange(index, event)}
              className="otp-input"
              maxLength="1"
            />
          ))}
        </div>
        <br />
        <div className="forgot-key-link">
          Forgot Key?
        </div>
        <button type="submit" className="custom-button-auth">LOG IN</button>
      </form>
    </div>
  );
}

export default AuthPage;
