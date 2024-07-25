import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${apiUrl}/Login`, { email, password })
      .then(result => {
        console.log(result);
        if (result.data === "Success") {
          navigate(`/`); // Navigate to /home on successful login
        } else {
          console.log("Login failed");
        }
      })
      .catch(err => {
        console.error(err);
        console.log("An error occurred during login");
      });
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}><b>Login</b></h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.inputContainer}>
            <label style={styles.label} htmlFor="email">Email:</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              type="email"
              id="email"
              name="email"
              required
              autoComplete="off"
            />
          </div>
          <div style={styles.inputContainer}>
            <label style={styles.label} htmlFor="password">Password:</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              type="password"
              id="password"
              name="password"
              required
              autoComplete="off"
            />
          </div>
          <button style={styles.button} type="submit"><b>Login</b></button>
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
  },
  formContainer: {
    width: '40vw',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60vh',
    borderRadius: '10%',
    backgroundColor: '#020617',
    padding: '20px',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    color: 'white',
    fontSize: '50px',
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
    backgroundColor: '#1e2a3b',
    color: 'white',
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #303f52',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: 'white',
    color: 'black',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};
