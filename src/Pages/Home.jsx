import React, { useState } from 'react';

function Home() {
  const [muted, setMuted] = useState(true);
  const toggleMute = () => setMuted(!muted);

  const steps = [
    { number: 1, title: 'Sign Up', description: 'Students and volunteers create accounts with TEAch using their email or social login. It only takes a few minutes.', icon: '👤' },
    { number: 2, title: 'Connect', description: 'Students are matched with volunteer tutors based on subject, grade, and availability.', icon: '🔗' },
    { number: 3, title: 'Learn', description: 'Tutors provide live online classes and support students with homework, revision, and guidance with just 2 hours a week.', icon: '📚' },
    { number: 4, title: 'Grow', description: 'Students gain confidence, improve grades, and open doors to new educational opportunities.', icon: '🚀' },
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
        </div>
      </section>

      {/* Who We Are Section */}
      <section style={styles.aboutSection}>
        <h2 style={styles.aboutTitle}>✨ Who We Are</h2>
        <div style={styles.aboutBox}>
          <p style={styles.aboutText}>
            Many tea estate families in Sri Lanka still face poverty, with children often leaving school too early. <br />
            <span style={styles.highlight}>TEAch Volunteers</span> was founded to change that. We connect dedicated volunteers with children who cannot afford private tutoring, offering them the 
            <span style={styles.highlight}> support</span>, 
            <span style={styles.highlight}> confidence</span>, and 
            <span style={styles.highlight}> hope</span> to succeed. <br />
            Our mission: every child deserves the chance to 
            <span style={styles.highlight}> learn</span>, 
            <span style={styles.highlight}> grow</span>, and 
            <span style={styles.highlight}> dream of a brighter future</span>.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section style={styles.videoSection}>
        <h2 style={styles.sectionTitle}>See Us In Action 🎥</h2>
        <div style={styles.videoWrapper}>
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
        </div>
      </section>

      {/* How It Works Section */}
      <section style={styles.howItWorksSection}>
        <h2 style={styles.sectionTitle}>How It Works</h2>
        <div style={styles.stepContainer}>
          {steps.map((step) => (
            <div key={step.number} style={styles.stepCard}>
              <div style={styles.stepIcon}>{step.icon}</div>
              <div>
                <div style={styles.stepNumber}>Step {step.number}</div>
                <h3 style={styles.stepTitle}>{step.title}</h3>
                <p style={styles.stepDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
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
    background: 'linear-gradient(135deg, #ffa366, #eb7630)',
    padding: '0 40px',
  },
  heroContent: { position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '40px', width: '100%', maxWidth: '1200px' },
  mainLogo: { width: '220px', height: '220px', objectFit: 'contain', borderRadius: '12px', backgroundColor: '#fff', padding: '20px', zIndex: 2, position: 'relative' },
  fancyText: { fontSize: '2.8rem', fontWeight: '800', textAlign: 'left', background: 'linear-gradient(90deg, #ffffff, #ffdab3, #eb7630)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: '1.2', maxWidth: '450px', zIndex: 2, flexShrink: 0, position: 'relative' },

  aboutSection: { padding: '50px 20px', maxWidth: '1000px', margin: '30px auto', textAlign: 'center' },
  aboutTitle: { fontSize: '2.6rem', fontWeight: '800', color: '#eb7630', marginBottom: '25px' },
  aboutBox: { backgroundColor: '#ffe6d1', borderRadius: '12px', padding: '30px 20px' },
  aboutText: { fontSize: '1.4rem', fontWeight: '600', lineHeight: '2', color: '#222' },
  highlight: { color: '#eb7630', fontWeight: '800' },

  videoSection: { padding: '30px 10px' },
  sectionTitle: { fontSize: '2rem', marginBottom: '20px', color: '#eb7630' },
  videoWrapper: { position: 'relative', display: 'inline-block', width: '80%', maxWidth: '800px' },
  video: { width: '100%', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' },
  muteButton: { position: 'absolute', bottom: '10px', right: '10px', background: '#eb7630', border: 'none', padding: '8px 15px', color: '#fff', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer' },

  // How It Works
  howItWorksSection: { padding: '50px 20px' },
  stepContainer: { display: 'flex', gap: '20px', overflowX: 'auto', paddingBottom: '10px' },
  stepCard: {
    flex: '0 0 250px', 
    display: 'flex',
    gap: '15px',
    padding: '20px',
    borderRadius: '12px',
    background: 'linear-gradient(135deg, #ffa366, #eb7630)',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  stepIcon: { fontSize: '2.5rem' },
  stepNumber: { fontWeight: '800', fontSize: '1.2rem', color: '#0e0d0dff' },
  stepTitle: { fontSize: '1.4rem', fontWeight: '700', margin: '5px 0' },
  stepDescription: { fontSize: '1rem', color: '#333' },
};

export default Home;
