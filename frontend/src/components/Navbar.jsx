import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ openLogin, openRegister, isLoggedIn, onProfile, onOrders, onLogout }) {
  return (
    <nav style={styles.navbar}>
      {/* Left: Logo only */}
      <div style={styles.logoContainer}>
       <h1
  style={{
    fontSize: '38px',
    fontWeight: '800',
    margin: 0,
    color: '#0f172a',
    letterSpacing: '-1px',
  }}
>
  ExpoGo
</h1>
      </div>

      {/* Center: Navigation Links */}
      <ul style={styles.navLinks}>
        <li>
          <Link to="/" style={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/#about" style={styles.link}>
            About
          </Link>
        </li>
        <li>
          <Link to="/#products" style={styles.link}>
            Products
          </Link>
        </li>
        <li>
          <Link to="/#inventory" style={styles.link}>
            Inventory
          </Link>
        </li>
        <li>
          <Link to="/#services" style={styles.link}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/#contact" style={styles.link}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Right: User Actions */}
      {!isLoggedIn ? (
        <div style={styles.authBox}>
          {/* Applied styles.authButton to both for consistency and easier modification */}
          <button
            style={styles.authButton}
            onClick={openLogin}
          >
            Login
          </button>
          <button
            style={styles.authButton}
            onClick={openRegister}
          >
            Register
          </button>
        </div>
      ) : (
        <div style={styles.profileMenuContainer}>
          <div style={styles.profileMenu}>
            <i className="fas fa-user-circle" style={styles.profileIcon}></i>
            <div style={styles.dropdown}>
              <div
                style={styles.dropdownItem}
                onClick={onProfile}
              >
                Profile
              </div>
              <div
                style={styles.dropdownItem}
                onClick={onOrders}
              >
                Orders
              </div>
              <div
                style={styles.dropdownItem}
                onClick={onLogout}
              >
                Logout
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '18px 60px',
    background: 'rgba(255,255,255,0.95)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    boxSizing: 'border-box',
    borderBottom: '1px solid rgba(0,0,0,0.05)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
    fontFamily: "'Poppins', sans-serif",
  },

  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },

  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '42px',
    margin: 0,
    padding: 0,
    alignItems: 'center',
  },

  link: {
    color: '#1e293b',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '600',
    transition: 'all .3s ease',
    cursor: 'pointer',
  },

  authBox: {
    display: 'flex',
    gap: '12px',
  },

  authButton: {
    background: '#188754',
    color: '#fff',
    border: 'none',
    padding: '12px 22px',
    borderRadius: '12px',
    fontWeight: '600',
    fontSize: '15px',
    cursor: 'pointer',
    transition: 'all .3s ease',
    boxShadow: '0 8px 20px rgba(24,135,84,.2)',
  },

  profileMenuContainer: {
    position: 'relative',
  },

  profileMenu: {
    position: 'relative',
    cursor: 'pointer',
  },

  profileIcon: {
    fontSize: '34px',
    color: '#188754',
  },

  dropdown: {
    position: 'absolute',
    top: '45px',
    right: 0,
    background: '#fff',
    borderRadius: '14px',
    boxShadow: '0 15px 40px rgba(0,0,0,.12)',
    minWidth: '180px',
    overflow: 'hidden',
  },

  dropdownItem: {
    padding: '14px 18px',
    color: '#334155',
    fontWeight: '500',
    cursor: 'pointer',
    borderBottom: '1px solid #f1f5f9',
  },
};

export default Navbar;