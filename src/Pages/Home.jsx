import React, { useState, useEffect } from 'react';

function Home() {
  const [muted, setMuted] = useState(true);
  const toggleMute = () => setMuted(!muted);

  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    if (styleSheet) {
      styleSheet.insertRule(`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `, styleSheet.cssRules.length);
    }
  }, []);

  return (
    <div style={styles.container}>
      
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.fancyText}>
            Empowering Communities<br />Through Education
          </h1>

         
          {/* <img src="/teach/MAIN-LOGO.jpg" alt="TEAch Volunteers" style={styles.mainLogo} /> */}
          <img src={process.env.PUBLIC_URL + "/MAIN-LOGO.jpg"} style={styles.mainLogo} alt="TEAch Volunteers" />

         
          <div style={styles.orbit}>
            {/* <img src="/brands/santander.png" alt="Santander" style={styles.brandLogo} /> */}
            <img src={process.env.PUBLIC_URL + "/brands/santander.png"} alt="Santander" style={styles.brandLogo} />
            <img src={process.env.PUBLIC_URL + "/brands/sussex.png"} alt="Sussex Innovation" style={styles.brandLogo} />
            <img src={process.env.PUBLIC_URL + "/brands/world vision lanka.jpg"} alt="World Vision Lanka" style={styles.brandLogo} />
          </div>
        </div>
      </section>

     
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
    gap: '50px',
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

  orbit: {
    position: 'absolute',
    top: '5%',          
    right: '3%',
    transform: 'translate(50%, -50%)',
    width: '300px',      
    height: '300px',     
    borderRadius: '50%',
    animation: 'spin 25s linear infinite',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 1,
  },

  brandLogo: {
    width: '100px',       
    height: '100px',      
    objectFit: 'contain',
    backgroundColor: '#fff',
    borderRadius: '50%',
    padding: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
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
