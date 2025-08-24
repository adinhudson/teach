import React, { useState } from 'react';

function Home() {
  const [muted, setMuted] = useState(true);
  const toggleMute = () => setMuted(!muted);

  const brands = [
    { src: "santander.png", name: "Santander" },
    { src: "sussex.png", name: "Sussex Innovation" },
    { src: "world vision lanka.jpg", name: "World Vision Lanka" },
  ];

  return (
    <div style={styles.container}>

      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.fancyText}>
            Empowering Communities<br />Through Education
          </h1>

          <img 
            src={process.env.PUBLIC_URL + "/MAIN-LOGO.jpg"} 
            style={styles.mainLogo} 
            alt="TEAch Volunteers" 
          />

          <div style={styles.brandsContainer}>
            {brands.map((brand, index) => (
              <div key={index} style={styles.brandWrapper}>
                <img
                  src={process.env.PUBLIC_URL + "/brands/" + brand.src}
                  alt={brand.name}
                  title={brand.name}
                  style={styles.brandLogo}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'scale(1.2)';
                    e.currentTarget.style.filter = 'brightness(1.2)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.filter = 'brightness(1)';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section style={styles.videoSection}>
        <h2 style={styles.sectionTitle}>See Us In Action 🎥</h2>
        <video
          style={styles.video}
          autoPlay
          loop
          muted={muted}
          src={process.env.PUBLIC_URL + "/videos/video.mp4"}
        />
        <button style={styles.muteButton} onClick={toggleMute}>
          {muted ? 'Unmute 🔊' : 'Mute 🔇'}
        </button>
      </section>
    </div>
  );
}

const styles = {
  container: { fontFamily: 'Nunito, sans-serif', textAlign: 'center' },

  hero: {
    position: 'relative',
    height: '60vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #ffa366, #ff8c42)',
    padding: '0 40px',
  },

  heroContent: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '40px',
    width: '100%',
    maxWidth: '1200px',
  },

  mainLogo: {
    width: '220px',
    height: '220px',
    objectFit: 'contain',
    borderRadius: '50%',
    backgroundColor: '#fff',
    padding: '20px',
    zIndex: 2,
    position: 'relative',
  },

  brandsContainer: {
    display: 'flex',
    flexDirection: 'row', // horizontal layout
    gap: '20px',
    justifyContent: 'center',
    alignItems: 'center',
  },

  brandWrapper: {
    transition: 'transform 0.3s ease, filter 0.3s ease',
    cursor: 'pointer',
  },

  brandLogo: {
    width: '100px',
    height: '100px',
    objectFit: 'contain',
    backgroundColor: '#fff',
    borderRadius: '50%',
    padding: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    transition: 'transform 0.3s ease, filter 0.3s ease',
  },

  fancyText: {
    fontSize: '2.8rem',
    fontWeight: '800',
    textAlign: 'left',
    background: 'linear-gradient(90deg, #ffffff, #ffdab3, #ff8c42)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    opacity: 0.9,
    lineHeight: '1.2',
    maxWidth: '450px',
    zIndex: 2,
    flexShrink: 0,
    position: 'relative',
  },

  // Video Section
  videoSection: {
    padding: '50px 20px',
    backgroundColor: '#fff7f0',
  },
  sectionTitle: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#ff8c42',
  },
  video: {
    width: '80%',
    maxWidth: '800px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
  },
  muteButton: {
    marginTop: '15px',
    background: '#ff8c42',
    border: 'none',
    padding: '10px 20px',
    color: '#fff',
    fontWeight: 'bold',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

export default Home;
