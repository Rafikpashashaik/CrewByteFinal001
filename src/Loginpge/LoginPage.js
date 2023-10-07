import React, { useState } from 'react';
// import "./LoginPage.css";

import './Login.css';
import vediobg from '../Images/Untitled.mp4'




function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    if (username === 'yourUsername' && password === 'yourPassword') {
      // Authentication successful, you can redirect or set a flag here
      // alert('Login successful!');
     window.location.href = './App.html'; 
    } else {
      // Authentication failed, show an error message
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div>
      <div className='Main-container'>
       
        <h2 className='Login-Title'>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label className='username-title' htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label className='pswd-title' htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className='button' type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
