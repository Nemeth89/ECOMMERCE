import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate, Link } from 'react-router-dom';

const SignupPage = () => {
  const { signupUser } = useContext(AppContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await signupUser(name, email, password);
    if (success) {
      alert('Registration successful! Please check your email for verification.');
      navigate('/login'); // Redirect to login after success
    } else {
      alert('Registration failed! Please try again.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="register-page">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="register">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div style={{ position: 'relative', width: '100%' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', paddingRight: '40px' }}
          />
          <span
            onClick={togglePasswordVisibility}
            style={{
              position: 'absolute',
              top: '50%',
              right: '10px',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
            }}
          >
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>
        <button type="submit">Sign up</button>
      </form>
      <div className="login-link">
        <p>Already have an account?</p>
        <Link to="/login">Login Here</Link>
      </div>
    </div>
  );
};

export default SignupPage;
