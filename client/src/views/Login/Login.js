import React, { useState } from 'react';
import './Login.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic for form submission can be added here
  };

  return (
    <div className="custom-login-container">
      <div className="system-title">
        Multi-Band GNSS Assisted Navigation System
      </div>
      <form onSubmit={handleSubmit} className="custom-login-form">
        <div className="form-header">
          <div><span className='roger-text'>ROGER</span> BY</div>
          <div className="institution-name">
            <h6>Military College Of Telecommunication & Engineering</h6>
          </div>
        </div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
          className="custom-input"
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          className="custom-input"
        />
        <div className="forgot-password">
          <span className="forgot-password-link">Forgot Username?</span>
          <span className="forgot-password-link">Forgot Password?</span>
        </div>
        <br />
        <button type="submit" className="custom-button">LOG IN</button>
      </form>
    </div>
  );
}

export default App;
