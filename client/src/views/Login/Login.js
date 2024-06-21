import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/login`, {
        userName: username,
        password: password,
      });
      if (response.data.success) {
        Swal.fire({
          title: 'Success!',
          text: 'Login Successful',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          window.location.href = '/mainDash'; 
        });
        
        setUsername('');
        setPassword('');
      } else {
        Swal.fire({
          title: 'Error!',
          text: response.data.message,
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    } catch (error) {
      if (error.response) {
        Swal.fire({
          title: 'Error!',
          text: error.response.data.message,
          icon: 'error',
          confirmButtonText: 'OK'
        });
      } else if (error.request) {
        Swal.fire({
          title: 'Error!',
          text: 'No response from server',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Error: ' + error.message,
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    }
  };

  return (
    <div className="custom-login-container">
      <div className="system-title">
        Multi-Band GNSS Navigation System
      </div>
      <form onSubmit={handleSubmit} className="custom-login-form">
        <div className="form-header">
          <div><span className='roger-text'>SARAS</span> BY</div>
          <div className="institution-name">
            <h6>Military College Of Telecommunication Engineering</h6>
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
