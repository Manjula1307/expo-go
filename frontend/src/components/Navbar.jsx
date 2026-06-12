import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ openLogin, openRegister, isLoggedIn, onProfile, onOrders, onLogout }) {
  return (
    <nav style={styles.navbar}>
      {/* Left: Logo only */}
      <div style={styles.logoContainer}>
        <h1>+expoGo</h1>
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
    // Reduced vertical padding to allow more space for the logo without increasing overall navbar height
    padding: '8px 40px', // Adjusted from '12px 40px'
    backgroundColor: '#f9f9f9',
    color: '#333',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    fontFamily: "'Poppins', sans-serif",
    // Optional: If you still have issues, you could set a minHeight, but adjusting padding is usually better.
    // minHeight: '90px',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
   
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '35px',
    margin: 0,
    padding: 0,
  },
  link: {
    color: '#333',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'color 0.3s ease',
    cursor: 'url(/cursor.cur), pointer',
  },
  authBox: {
    display: 'flex',
    // gap: '10px', // Remove this and use margin on individual buttons for better control
    // backgroundColor: '#0d6efd', // This was setting the blue background to the entire box, move it to the button
    // padding: '8px 16px', // This was setting the padding to the entire box, move it to the button
    borderRadius: '8px',
  },
  authButton: { // New style for individual buttons
    color: '#fff',
    background: '#0d6efd', // Apply background to the button itself
    border: 'none',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'url(/cursor.cur), pointer',
    padding: '8px 16px', // Apply padding to the button
    borderRadius: '8px', // Apply border-radius to the button
    // Add gap between buttons
    marginRight: '10px', // Add right margin to create space
  },
  profileMenu: {
    position: 'relative',
    cursor: 'url(/cursor.cur), pointer',
  },
  profileIcon: {
    fontSize: '28px',
    color: '#0d6efd',
    cursor: 'url(/cursor.cur), pointer',
  },
  profileMenuContainer: {
    position: 'relative',
    display: 'inline-block',
  },
  dropdown: {
    position: 'absolute',
    top: '35px',
    right: 0,
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    padding: '8px 0',
    zIndex: 1000,
    minWidth: '130px',
  },
  dropdownItem: {
    padding: '8px 16px',
    cursor: 'url(/cursor.cur), pointer',
    color: '#333',
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
  },
};

export default Navbar;