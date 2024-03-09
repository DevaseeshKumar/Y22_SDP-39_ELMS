// Signup.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignup = () => {
    // You can implement your signup logic here
    console.log(`Signing up with email: ${email} and password: ${password}`);
    // For a real application, you would typically make an API call for user registration

    // After successful signup, navigate to the login page with the email as state
    navigate('/login', {
      state: { email },
    });
  };

  return (
    <div style={styles.signupContainer}>
      <div style={styles.card}>
        <h2>Signup</h2>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={handleEmailChange}
          style={styles.inputField}
        />

        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
          style={styles.inputField}
        />

        <button onClick={handleSignup} style={styles.signupButton}>
          Signup
        </button>
      </div>
    </div>
  );
};

const styles = {
  signupContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: '300px',
  },
  inputField: {
    width: '100%',
    padding: '8px',
    margin: '8px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
  },
  signupButton: {
    backgroundColor: '#2196F3',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
  },
};

export default Signup;
