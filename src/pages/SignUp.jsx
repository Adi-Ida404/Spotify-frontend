import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_BACKEND_URL;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${apiUrl}/SignUp`, { email, userName, password })
      .then(result => {
        console.log(result);
        navigate('/Login');
      })
      .catch(err => console.error(err));
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}><b>Sign Up</b></h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.inputContainer}>
            <label style={styles.label} htmlFor="createemail">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              type="email"
              id="createemail"
              name="email"
              required
              autoComplete="off"
            />
          </div>
          <div style={styles.inputContainer}>
            <label style={styles.label} htmlFor="createusername">Create Username:</label>
            <input
              onChange={(e) => setUserName(e.target.value)}
              style={styles.input}
              type="text"
              id="createusername"
              name="username"
              required
              autoComplete="off"
            />
          </div>
          <div style={styles.inputContainer}>
            <label style={styles.label} htmlFor="createpassword">Create Password:</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              type="password"
              id="createpassword"
              name="password"
              required
              autoComplete="off"
            />
          </div>
          <button style={styles.button} type="submit"><b>Create Account</b></button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#020617',
    padding: '0 10px', // Add some horizontal padding for small screens
  },
  formContainer: {
    width: '100%',
    maxWidth: '500px', // Set a max width to limit the form size
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    borderRadius: '10px',
    backgroundColor: '#020617',
    padding: '20px',
    boxSizing: 'border-box', // Ensure padding is included in the width
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: 'white',
    fontSize: '2.5rem', // Use relative units for font size
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: '15px',
  },
  label: {
    textAlign: 'left',
    display: 'block',
    marginBottom: '5px',
    color: 'white',
  },
  input: {
    color: 'white',
    backgroundColor: '#1e2a3b',
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #303f52',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: 'White',
    color: 'black',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  '@media (max-width: 600px)': { // Example of media query for small screens
    formContainer: {
      width: '100%',
      padding: '10px',
    },
    heading: {
      fontSize: '2rem',
    },
  },
};
