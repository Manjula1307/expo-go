import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import molecule from '../assets/molecule.jpg'

function Home() {

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
    >
  {/* Background image layer */}
      <div
        style={{
          ...styles.backgroundImage,
         
        }}
      ></div>
<div style={styles.circle1}></div>
<div style={styles.circle2}></div>
<div style={styles.circle3}></div>
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
      {/* Center Description */}
<div data-aos="fade-up" style={styles.centerDescription}>
  <p style={styles.description}>
    At ExpoGo Medical Technologies, we aim to make advanced medical care accessible and affordable for healthcare providers worldwide.
    Our mission is to bridge the gap in healthcare delivery with sustainable, reliable, and cost-effective critical-care equipment.
  </p>
</div>

{/* ADD THIS HERE */}
<div style={styles.statsContainer}>
  <div style={styles.statCard}>
    <h2 style={{color:'#188754', margin:'0'}}>50+</h2>
    <p>Hospitals Served</p>
  </div>

  <div style={styles.statCard}>
    <h2>120+</h2>
    <p>Medical Devices</p>
  </div>

  <div style={styles.statCard}>
    <h2>99%</h2>
    <p>Client Satisfaction</p>
  </div>
</div>

{/* Existing Button */}
<a data-aos="zoom-in" href="#products" style={styles.button}>
  Explore Products
</a>
    </section>
  );
}

const styles = {
  homeSection: {
    minHeight: '100vh',
    paddingTop: '160px',
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
  width: '80%',
  height: '80%',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundImage: `url(${molecule})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  opacity: 0.08,
  zIndex: 0,
  animation: 'float 8s ease-in-out infinite',
},
  centeredContent: {
    zIndex: 2,
    maxWidth: '900px',
  },

  textBox: {
    padding: '20px',
  },

companyName: {
  fontSize: '64px',
  fontWeight: '800',
  color: '#0f172a',
  lineHeight: '1.1',
  marginBottom: '20px',
  animation: 'fadeUp 1s ease',
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
  background: 'linear-gradient(135deg,#188754,#22c55e)',
  color: '#fff',
  padding: '18px 36px',
  borderRadius: '50px',
  textDecoration: 'none',
  fontWeight: '600',
  fontSize: '18px',
  boxShadow: '0 15px 35px rgba(24,135,84,.25)',
  transition: 'all .3s ease',
},
  circle1: {
  position: 'absolute',
  width: '250px',
  height: '250px',
  borderRadius: '50%',
  background: 'rgba(24,135,84,.08)',
  top: '10%',
  left: '10%',
  animation: 'float 6s ease-in-out infinite',
},

circle2: {
  position: 'absolute',
  width: '180px',
  height: '180px',
  borderRadius: '50%',
  background: 'rgba(13,110,253,.08)',
  top: '20%',
  right: '12%',
  animation: 'float 8s ease-in-out infinite',
},

circle3: {
  position: 'absolute',
  width: '120px',
  height: '120px',
  borderRadius: '50%',
  background: 'rgba(24,135,84,.08)',
  bottom: '15%',
  left: '20%',
  animation: 'float 10s ease-in-out infinite',
},
statsContainer: {
  display: 'flex',
  justifyContent: 'center',
  gap: '30px',
  marginTop: '50px',
  marginBottom: '40px',
  flexWrap: 'wrap',
  zIndex: 2,
},

statCard: {
  background: '#fff',
  padding: '25px 35px',
  minWidth: '180px',
  borderRadius: '20px',
  boxShadow: '0 10px 30px rgba(0,0,0,.08)',
  textAlign: 'center',
},
};

export default Home;