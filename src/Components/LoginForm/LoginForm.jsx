import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import styles from './Login.module.css';
import { FaBook, FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const LoginForm = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showManualLogin, setShowManualLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [manualLoginData, setManualLoginData] = useState({
    username: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleGoogleLoginSuccess = async (credentialResponse) => {
    try {
      setLoading(true);
      const decoded = jwtDecode(credentialResponse.credential);
      
      const userData = {
        username: decoded.email.split('@')[0],
        email: decoded.email,
        password: `google_${Date.now()}`,
        is_librarian: 0,
        profile_image: decoded.picture || null,
      };

      const response = await fetch('https://bookhive-90e4e8826675.herokuapp.com/api/users/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      localStorage.setItem('user', JSON.stringify({
        user_id: data.user.user_id,
        username: data.user.username,
        is_librarian: data.user.is_librarian,
        email: data.user.email
      }));

      navigate('/home');
      
    } catch (error) {
      console.error('Login error:', error);
      setError('An error occurred during login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleManualLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Validate input
      if (!manualLoginData.username || !manualLoginData.password) {
        setError('Please fill in all fields');
        return;
      }

      // Username validation (basic check)
      if (manualLoginData.username.length < 3) {
        setError('Username must be at least 3 characters long');
        return;
      }

      const userData = {
        username: manualLoginData.username,
        email: `${manualLoginData.username}@bookhive.local`, // Create pseudo-email for backend compatibility
        password: manualLoginData.password,
        is_librarian: 0,
        profile_image: null,
      };

      const response = await fetch('https://bookhive-90e4e8826675.herokuapp.com/api/users/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Invalid email or password');
        }
        throw new Error('Login failed. Please try again.');
      }

      const data = await response.json();
      
      // Store user data in localStorage (same format as Google OAuth)
      localStorage.setItem('user', JSON.stringify({
        user_id: data.user.user_id,
        username: data.user.username,
        is_librarian: data.user.is_librarian,
        email: data.user.email
      }));

      navigate('/home');
      
    } catch (error) {
      console.error('Manual login error:', error);
      setError(error.message || 'An error occurred during login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setManualLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.brandSection}>
        <FaBook className={styles.brandIcon} />
        <h1>BookHive</h1>
        <p className={styles.brandTagline}>Your Digital Library Companion</p>
      </div>

      <div className={styles.loginSection}>
        <h2>Welcome Back</h2>
        <p className={styles.loginMessage}>Sign in to continue to your library</p>

        {!showManualLogin ? (
          // Google OAuth and Manual Login Toggle
          <div className={styles.loginOptions}>
            <div className={styles.googleLoginWrapper}>
              <GoogleLogin
                onSuccess={handleGoogleLoginSuccess}
                onError={() => {
                  setError('Google login failed. Please try again.');
                }}
                useOneTap={false}
                disabled={loading}
              />
            </div>

            <div className={styles.divider}>
              <span>or</span>
            </div>

            <button
              className={styles.manualLoginToggle}
              onClick={() => setShowManualLogin(true)}
              disabled={loading}
              type="button"
            >
              <FaUser className={styles.toggleIcon} />
              Sign in with Username
            </button>
          </div>
        ) : (
          // Manual Login Form
          <form onSubmit={handleManualLogin} className={styles.manualLoginForm}>
            <div className={styles.inputGroup}>
              <div className={styles.inputWrapper}>
                <FaUser className={styles.inputIcon} />
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={manualLoginData.username}
                  onChange={handleInputChange}
                  required
                  disabled={loading}
                  className={styles.manualInput}
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <div className={styles.inputWrapper}>
                <FaLock className={styles.inputIcon} />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={manualLoginData.password}
                  onChange={handleInputChange}
                  required
                  disabled={loading}
                  className={styles.manualInput}
                />
                <button
                  type="button"
                  className={styles.passwordToggle}
                  onClick={togglePasswordVisibility}
                  disabled={loading}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className={styles.manualLoginButton}
              disabled={loading}
            >
              {loading ? 'Signing In...' : 'Sign In'}
            </button>

            <button
              type="button"
              className={styles.backToOptionsButton}
              onClick={() => {
                setShowManualLogin(false);
                setError('');
                setManualLoginData({ username: '', password: '' });
              }}
              disabled={loading}
            >
              Back to Login Options
            </button>
          </form>
        )}

        {error && <div className={styles.error}>{error}</div>}

        <div className={styles.termsSection}>
          <p>By signing in, you agree to our</p>
          <div className={styles.termsLinks}>
            <a href="#" className={styles.termsLink}>Terms of Service</a>
            <span> and </span>
            <a href="#" className={styles.termsLink}>Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;