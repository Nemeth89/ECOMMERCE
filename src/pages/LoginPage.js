import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const { loginUser } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await loginUser(email, password);
    if (success) {
      navigate('/'); // Redirect to homepage or dashboard
    } else {
      alert('Invalid login credentials');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-page">
      <h2 className="loginhead">Login</h2>
      <form onSubmit={handleSubmit} className="login">
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
        <button type="submit">Login</button>
      </form>
      <div className="extra-links">
        <p>
          Don't have an account? <Link to="/signup" className="signup-here">Sign up Here</Link>
        </p>
        <p>
          <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
