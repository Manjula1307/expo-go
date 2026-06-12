import React, { useState } from 'react';

function Register({onClose, onRegister, openLogin}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');  // 'user' or 'admin'
  const [email, setEmail] = useState('');

  const handleBackgroundClick = (e) => {
    if (e.target.id === 'registerOverlay') {
      onClose();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://expo-go-backend.onrender.com/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password, role }),
      });

      const data = await response.json();

     if (response.ok) {
  alert('✅ Registration successful! Please log in now.');
  onClose();    // Close Register
  openLogin();  // Open Login
} else {
        alert('❌ Error: ' + data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('❌ Network error!');
    }
  };

  return (
    <div
      id="registerOverlay"
      onClick={handleBackgroundClick}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: 'white',
          padding: '40px',
          borderRadius: '20px',
          width: '450px',
          position: 'relative',
          boxShadow: '0 20px 60px rgba(0,0,0,.15)',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            fontSize: '20px',
            background: 'none',
            border: 'none',
              cursor: 'url(/cursor.cur), default',  
          }}
        >
          ❌
        </button>

        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Register</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={inputStyle}
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={inputStyle}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <button type="submit" style={buttonStyle}>Register</button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '14px',
  marginBottom: '16px',
  borderRadius: '12px',
  border: '1px solid #e2e8f0',
  fontSize: '15px',
  boxSizing: 'border-box'
};

const buttonStyle = {
  width: '100%',
  background: '#188754',
  color: '#fff',
  padding: '14px',
  border: 'none',
  borderRadius: '12px',
  fontWeight: '600',
  fontSize: '16px',
  cursor: 'pointer'
};

export default Register;
