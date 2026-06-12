import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section id="about" style={styles.aboutSection}>
      <h2 data-aos="fade-up" style={styles.heading}>
        About ExpoGo
      </h2>

      <p data-aos="fade-up" style={styles.subHeading}>
        Delivering innovative and affordable healthcare technology solutions
        that empower hospitals, clinics, and healthcare providers worldwide.
      </p>

      <div style={styles.cardsContainer}>
        <div data-aos="fade-up" style={styles.card}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/864/864685.png"
            alt="Mission"
            style={styles.icon}
          />
          <h3 style={styles.cardTitle}>Our Mission</h3>
          <p style={styles.cardDescription}>
            To develop and deliver cost-effective critical-care medical
            equipment, making advanced healthcare accessible to every corner
            of the world.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="100" style={styles.card}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2920/2920050.png"
            alt="Vision"
            style={styles.icon}
          />
          <h3 style={styles.cardTitle}>Our Vision</h3>
          <p style={styles.cardDescription}>
            To become a global leader in affordable healthcare technology,
            empowering hospitals and clinics with innovative solutions.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="200" style={styles.card}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2785/2785819.png"
            alt="Innovation"
            style={styles.icon}
          />
          <h3 style={styles.cardTitle}>Innovation</h3>
          <p style={styles.cardDescription}>
            We continuously innovate healthcare technology to deliver
            reliable, scalable, and patient-focused solutions.
          </p>
        </div>
      </div>

      <div style={styles.statsSection}>
        <div style={styles.statCard}>
          <h2>500+</h2>
          <p>Hospitals Served</p>
        </div>

        <div style={styles.statCard}>
          <h2>50+</h2>
          <p>Medical Products</p>
        </div>

        <div style={styles.statCard}>
          <h2>24/7</h2>
          <p>Technical Support</p>
        </div>

        <div style={styles.statCard}>
          <h2>15+</h2>
          <p>Countries Reached</p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  aboutSection: {
    minHeight: '100vh',
    padding: '120px 20px',
    background: 'linear-gradient(180deg,#ffffff,#f8fffe)',
    fontFamily: "'Poppins', sans-serif",
  },

  heading: {
    fontSize: '48px',
    fontWeight: '800',
    textAlign: 'center',
    color: '#0f172a',
    marginBottom: '20px',
  },

  subHeading: {
    maxWidth: '850px',
    margin: '0 auto 70px',
    textAlign: 'center',
    color: '#475569',
    lineHeight: '1.8',
    fontSize: '18px',
  },

  cardsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
  },

  card: {
    background: '#fff',
    borderRadius: '24px',
    padding: '35px',
    boxShadow: '0 15px 40px rgba(0,0,0,.08)',
    border: '1px solid rgba(0,0,0,.05)',
    textAlign: 'center',
  },

  icon: {
    width: '70px',
    marginBottom: '20px',
  },

  cardTitle: {
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '15px',
    color: '#188754',
  },

  cardDescription: {
    fontSize: '16px',
    color: '#475569',
    lineHeight: '1.8',
  },

  statsSection: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
    gap: '25px',
    maxWidth: '1200px',
    margin: '80px auto 0',
  },

  statCard: {
    background: '#188754',
    color: '#fff',
    padding: '30px',
    borderRadius: '20px',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(24,135,84,.2)',
  },
};

export default About;

