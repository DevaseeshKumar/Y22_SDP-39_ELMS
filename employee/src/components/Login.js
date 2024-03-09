import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import backgroundImage from './login.jpg'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(''); // State for role
  const navigate = useNavigate();
  const location = useLocation();
  const signupEmail = location.state && location.state.email;

  // Set the signup email in the state if available
  useState(() => {
    if (signupEmail) {
      setEmail(signupEmail);
    }
  }, [signupEmail]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleLogin = () => {
    // For simplicity, always navigate for now
    // In a real application, you would typically make an API call for authentication
    // If authentication is successful, navigate based on the selected role
    switch (role) {
      case 'Admin':
        navigate('/admin');
        break;
      case 'HR':
        navigate('/hr');
        break;
      case 'Employee':
        navigate('/employee');
        break;
      default:
        console.log('Invalid role');
        break;
    }
  };

  const handleForgotPassword = () => {
    // You can implement your forgot password logic here
    console.log('Forgot Password clicked');
    // For a real application, you might redirect to a forgot password page or show a modal
  };

  return (
    <div style={styles.loginContainer}>
      <div style={{...styles.card, ...styles.blurEffect}}>
        <h2>Login</h2>
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

        {/* Dropdown for selecting role */}
        <label>Role:</label>
        <select value={role} onChange={handleRoleChange} style={styles.inputField}>
          <option value="">Select Role</option>
          <option value="Admin">Admin</option>
          <option value="HR">HR</option>
          <option value="Employee">Employee</option>
        </select>

        <button onClick={handleLogin} style={styles.loginButton}>
          Login
        </button>

        <button onClick={handleForgotPassword} style={styles.forgotPasswordButton}>
          Forgot Password
        </button>
      </div>
    </div>
  );
};

const styles = {
  loginContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent white background
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: '300px',
  },
  blurEffect: {
    backdropFilter: 'blur(5px)', // Apply a blur effect to the card only
  },
  inputField: {
    width: '100%',
    padding: '8px',
    margin: '8px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
  },
  loginButton: {
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
    marginBottom: '8px',
  },
  forgotPasswordButton: {
    backgroundColor: '#2196F3',
    color: 'white',
    padding: '8px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
  },
};

export default Login;
