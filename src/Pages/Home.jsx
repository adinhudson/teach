import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Home() {
  const [muted, setMuted] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMute = () => setMuted(!muted);

  // Responsive listener
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const steps = [
    { number: 1, title: 'Sign Up', description: 'Students and volunteers create accounts with TEAch using their email or social login. It only takes a few minutes.', icon: '👤' },
    { number: 2, title: 'Connect', description: 'Students are matched with volunteer tutors based on subject, grade, and availability.', icon: '🔗' },
    { number: 3, title: 'Learn', description: 'Tutors provide live online classes and support students with homework, revision, and guidance with just 2 hours a week.', icon: '📚' },
    { number: 4, title: 'Grow', description: 'Students gain confidence, improve grades, and open doors to new educational opportunities.', icon: '🚀' },
  ];

  const logos = [
    { src: "/brands/santander.png", name: "Santander" },
    { src: "/brands/sussex.png", name: "University of Sussex" },
    { src: "/brands/world_vision_lanka.jpg", name: "World Vision Lanka" },
  ];

  // Repeat logos 4 times so we never see the "end"
  const repeatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div style={styles.container}>

      {/* Hero Section */}
      <section style={{
        ...styles.hero,
        padding: isMobile ? "30px 15px" : "60px 20px",
        textAlign: "center"
      }}>
        <div style={{
          ...styles.heroContent,
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "20px" : "40px"
        }}>
          <h1 style={{
            ...styles.fancyText,
            fontSize: isMobile ? "2rem" : "3rem",
            maxWidth: isMobile ? "100%" : "480px"
          }}>
            Empowering Communities<br />Through Education
          </h1>
          <img
            src={process.env.PUBLIC_URL + "/MAIN-LOGO.jpg"}
            style={{
              ...styles.mainLogo,
              width: isMobile ? "140px" : "220px",
              marginTop: isMobile ? "15px" : "0"
            }}
            alt="TEAch Volunteers"
          />
        </div>

        <div style={{ marginTop: "30px" }}>
          <Link 
            to="/volunteer" 
            style={{
              ...styles.volunteerButton,
              fontSize: isMobile ? "1rem" : "1.2rem",
              padding: isMobile ? "10px 20px" : "12px 30px"
            }}
          >
            Become a Volunteer
          </Link>
        </div>
      </section>

      {/* Who We Are Section */}
      <section style={styles.aboutSection}>
        <h2 style={styles.aboutTitle}>✨ Who We Are</h2>
        <div style={styles.aboutBox}>
          <p style={{
            ...styles.aboutText,
            fontSize: isMobile ? "1rem" : "1.3rem",
            lineHeight: isMobile ? "1.6" : "1.9"
          }}>
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
        <h2 style={{ ...styles.sectionTitle, fontSize: isMobile ? "1.5rem" : "2rem" }}>
          See Us In Action 🎥
        </h2>
        <div style={styles.videoWrapper}>
          <video
            style={styles.video}
            autoPlay
            loop
            muted={muted}
            src={process.env.PUBLIC_URL + "/videos/new_teach.mp4"}
          />
          <button style={styles.muteButton} onClick={toggleMute}>
            {muted ? 'Unmute 🔊' : 'Mute 🔇'}
          </button>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={styles.howItWorksSection}>
        <h2 style={{ ...styles.sectionTitle, fontSize: isMobile ? "1.5rem" : "2rem" }}>How It Works</h2>
        <div style={{
          ...styles.stepContainer,
          flexDirection: isMobile ? "column" : "row",
          alignItems: 'stretch',
        }}>
          {steps.map((step) => (
            <div key={step.number} style={{
              ...styles.stepCard,
              flex: 1,
              padding: isMobile ? "15px" : "20px",
              marginBottom: isMobile ? "15px" : "0",
              display: 'flex',
              flexDirection: 'column',
            }}>
              <div style={styles.stepIcon}>{step.icon}</div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={styles.stepNumber}>Step {step.number}</div>
                <h3 style={{
                  ...styles.stepTitle,
                  fontSize: isMobile ? "1.1rem" : "1.3rem"
                }}>{step.title}</h3>
                <p style={{
                  ...styles.stepDescription,
                  fontSize: isMobile ? "0.95rem" : "1rem",
                  marginTop: 'auto'
                }}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recognition Section */}
      <section style={styles.recognitionSection}>
        <h2 style={{ ...styles.sectionTitle, fontSize: isMobile ? "1.5rem" : "2rem" }}>🌟 TEAch Has Been Recognized By</h2>
        <div style={styles.logoScroller}>
          <div style={styles.logoTrack}>
            {repeatedLogos.map((logo, i) => (
              <div key={i} style={styles.logoCard}>
                <img src={process.env.PUBLIC_URL + logo.src} alt={logo.name} style={{
                  ...styles.logoImage,
                  height: isMobile ? "50px" : "80px"
                }} />
                <p style={styles.logoName}>{logo.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Volunteer Section */}
      <section style={styles.volunteerSection}>
        <h2 style={{ ...styles.volunteerTitle, fontSize: isMobile ? "1.8rem" : "2.4rem" }}>
          ✨ Join Us Now – Change Young Lives Forever ✨
        </h2>
        <p style={{ ...styles.volunteerText, fontSize: isMobile ? "1rem" : "1.2rem" }}>
          Give just <span style={styles.highlight}>2 hours a week</span> and help empower the next generation to dream, learn, and achieve.
        </p>
        <Link 
          to="/volunteer" 
          style={{
            ...styles.volunteerButton,
            fontSize: isMobile ? "1rem" : "1.2rem",
            padding: isMobile ? "10px 20px" : "12px 30px"
          }}
        >
          Become a Volunteer
        </Link>
      </section>

    </div>
  );
}

const styles = {
  container: { 
    fontFamily: 'Nunito, sans-serif', 
    textAlign: 'center',
    paddingTop: '69px', // Height of navbar
  },

  hero: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #eb7630, #eb7630)',
    position: 'relative',
    width: '100%',
    zIndex: 1,
  },
  heroContent: { display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' },
  mainLogo: { objectFit: 'contain', borderRadius: '12px', backgroundColor: '#fff' },
  fancyText: { fontWeight: '800', lineHeight: '1.2', background: 'linear-gradient(90deg, #ffffff, #ffdab3, #eb7630)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' },

  aboutSection: { padding: '50px 20px', maxWidth: '1000px', margin: '30px auto', position: 'relative', zIndex: 1 },
  aboutTitle: { fontSize: '2.3rem', fontWeight: '800', color: '#eb7630', marginBottom: '20px' },
  aboutBox: { backgroundColor: '#ffe6d1', borderRadius: '12px', padding: '25px 20px' },
  aboutText: { fontWeight: '600', color: '#222' },
  highlight: { color: '#eb7630', fontWeight: '800' },

  videoSection: { padding: '30px 10px', position: 'relative', zIndex: 1 },
  sectionTitle: { marginBottom: '20px', color: '#eb7630' },
  videoWrapper: { position: 'relative', display: 'inline-block', width: '90%', maxWidth: '700px', zIndex: 1 },
  video: { width: '100%', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' },
  muteButton: { position: 'absolute', bottom: '10px', right: '10px', background: '#eb7630', border: 'none', padding: '8px 15px', color: '#fff', fontWeight: 'bold', borderRadius: '8px', cursor: 'pointer' },

  howItWorksSection: { padding: '50px 20px', position: 'relative', zIndex: 1 },
  stepContainer: { display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' },
  stepCard: { display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '12px', background: 'linear-gradient(135deg, #ffa366, #eb7630)', color: '#fff', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' },
  stepIcon: { fontSize: '2.5rem', marginBottom: '10px' },
  stepNumber: { fontWeight: '800', fontSize: '1.1rem' },
  stepTitle: { fontWeight: '700', margin: '5px 0' },
  stepDescription: { color: '#fff' },

  recognitionSection: { padding: '50px 20px', background: '#fff7f2', position: 'relative', zIndex: 1 },
  logoScroller: { overflow: 'hidden', width: '100%' },
  logoTrack: { display: 'flex', flexWrap: 'nowrap', animation: 'scroll 40s linear infinite' },
  logoCard: { flex: '0 0 auto', margin: '0 25px', textAlign: 'center' },
  logoImage: { objectFit: 'contain' },
  logoName: { marginTop: '6px', fontSize: '0.85rem', color: '#333' },

  volunteerSection: { padding: '60px 20px', background: 'linear-gradient(135deg, #ffdab3, #ffa366, #eb7630)', color: '#fff', position: 'relative', zIndex: 1 },
  volunteerTitle: { fontWeight: '800', marginBottom: '20px' },
  volunteerText: { marginBottom: '25px', fontWeight: '600' },
  volunteerButton: { background: '#fff', color: '#eb7630', fontWeight: '800', borderRadius: '8px', textDecoration: 'none', transition: '0.3s' },
};

// Inject keyframes globally
const styleSheet = document.styleSheets[0];
if (styleSheet) {
  const keyframes = `
    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-25%); } /* scrolls through 1 of 4 sets */
    }
  `;
  if (![...styleSheet.cssRules].some(rule => rule.name === "scroll")) {
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
  }
}

export default Home;
