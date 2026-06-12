import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import molecule from '../assets/molecule.jpg'

function Home() {

  //image-effect 
   const [bgVisible, setBgVisible] = useState(false);

   //aos-animation
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, mirror: true, easing: 'ease-in-out', });
  }, []);

  return (
    <section
      id="home"
      style={{
        ...styles.homeSection,
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={() => setBgVisible(true)}
      onMouseLeave={() => setBgVisible(false)}
    >
  {/* Background image layer */}
      <div
        style={{
          ...styles.backgroundImage,
          opacity: bgVisible ? 0.1 : 0,  //transparent effect
        }}
      ></div>

      {/* Centered Text Only (Logo Removed) */}
      <div data-aos="fade-up" style={styles.centeredContent}>
        <div style={styles.textBox}>
          <h1 style={styles.companyName}>ExpoGo Medical Technologies</h1>
          <p style={styles.shortIntro}>
            Revolutionizing critical-care medical equipment for emerging healthcare markets.
          </p>
        </div>
      </div>
      

      {/* Center Description */}
      <div data-aos="fade-up" style={styles.centerDescription}>
        <p style={styles.description}>
          At ExpoGo Medical Technologies, we aim to make advanced medical care accessible and affordable for healthcare providers worldwide. 
          Our mission is to bridge the gap in healthcare delivery with sustainable, reliable, and cost-effective critical-care equipment.
        </p>
      </div>

      {/* Button */}
      <a data-aos="zoom-in" href="#products" style={styles.button}>Explore Products</a>
    </section>
  );
}

const styles = {
  homeSection: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '40px', // Reduced top padding
    backgroundColor: '#f0fdf4',
    fontFamily: "'Poppins', sans-serif",
    padding: '20px',
    textAlign: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '80%',
    backgroundImage: `url(${molecule})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'opacity 1.5s ease',
    zIndex: 0,
  },
  centeredContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px', // Reduced margin
    padding: '0 20px',
    maxWidth: '800px',
  },
  textBox: {
    maxWidth: '600px',
  },
  companyName: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#000',
    marginBottom: '10px',
  },
  shortIntro: {
    fontSize: '16px',
    color: '#000',
    marginBottom: '10px', // Reduced margin
  },
  centerDescription: {
    maxWidth: '800px',
    marginBottom: '20px', // Reduced margin
    textAlign: 'center',
    padding: '0 20px',
  },
  description: {
    fontSize: '18px',
    color: '#000',
    lineHeight: '1.6',
  },
  button: {
    backgroundColor: '#188754',
    color: '#fff',
    padding: '12px 24px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'background-color 0.3s ease',
    fontSize: '18px',
    marginTop: '10px', // Reduced margin
  },
};

export default Home;