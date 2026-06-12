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
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    background: 'linear-gradient(135deg,#f8fffe,#e8f5f0)',
    padding: '120px 20px 80px',
    position: 'relative',
    overflow: 'hidden',
    fontFamily: "'Poppins', sans-serif",
  },

  backgroundImage: {
    position: 'absolute',
    width: '70%',
    height: '70%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    backgroundImage: `url(${molecule})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    transition: 'all .6s ease',
    zIndex: 0,
  },

  centeredContent: {
    zIndex: 2,
    maxWidth: '900px',
  },

  textBox: {
    padding: '20px',
  },

  companyName: {
    fontSize: '58px',
    fontWeight: '800',
    color: '#0f172a',
    lineHeight: '1.1',
    marginBottom: '20px',
  },

  shortIntro: {
    fontSize: '22px',
    color: '#475569',
    marginBottom: '30px',
  },

  centerDescription: {
    maxWidth: '850px',
    zIndex: 2,
    marginTop: '10px',
  },

  description: {
    fontSize: '18px',
    lineHeight: '1.9',
    color: '#334155',
  },

  button: {
    marginTop: '40px',
    background: '#188754',
    color: '#fff',
    padding: '16px 32px',
    borderRadius: '50px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '18px',
    boxShadow: '0 10px 25px rgba(24,135,84,.25)',
  },
};

export default Home;