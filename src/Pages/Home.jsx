import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../Styles/home.css';

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
    <div className="container">
      {/* Hero Section */}
      <section className="hero" style={{padding: isMobile ? "30px 15px" : "60px 20px", textAlign: "center"}}>
        <div className="heroContent" style={{flexDirection: isMobile ? "column" : "row", gap: isMobile ? "20px" : "40px", padding: isMobile ? "0 10px" : "0", boxSizing: "border-box", width: "100%"}}>
          <h1 className="fancyText" style={{fontSize: isMobile ? "2rem" : "3rem", maxWidth: isMobile ? "100%" : "480px", padding: isMobile ? "0 15px" : "0", margin: isMobile ? "0 auto" : "0", width: isMobile ? "calc(100% - 30px)" : "auto", boxSizing: "border-box"}}>
            Empowering Communities<br />Through Education
          </h1>
          <img
            src={"/hero_image.png"}
            className="mainLogo"
            alt="TEAch Volunteers"
          />
        </div>
        <div style={{ marginTop: "30px" }}>
          <Link 
            to="/volunteer" 
            className="volunteerButton"
            style={{fontSize: isMobile ? "1rem" : "1.2rem", padding: isMobile ? "10px 20px" : "12px 30px"}}
          >
            Become a Volunteer
          </Link>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="aboutSection">
        <h2 className="aboutTitle">✨ Who We Are</h2>
        <div className="aboutBox">
          <p className="aboutText" style={{fontSize: isMobile ? "1rem" : "1.3rem", lineHeight: isMobile ? "1.6" : "1.9"}}>
            Many tea estate families in Sri Lanka still face poverty, with children often leaving school too early. <br />
            <span className="highlight">TEAch Volunteers</span> was founded to change that. We connect dedicated volunteers with children who cannot afford private tutoring, offering them the
            <span className="highlight"> support</span>,
            <span className="highlight"> confidence</span>, and
            <span className="highlight"> hope</span> to succeed. <br />
            Our mission: every child deserves the chance to
            <span className="highlight"> learn</span>,
            <span className="highlight"> grow</span>, and
            <span className="highlight"> dream of a brighter future</span>.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="videoSection">
        <h2 className="sectionTitle" style={{fontSize: isMobile ? "1.5rem" : "2rem"}}>
          See Us In Action 🎥
        </h2>
        <div className="videoWrapper">
          <video
            className="video"
            autoPlay
            loop
            muted={muted}
            src={"/videos/new_teach.mp4"}
          />
          <button className="muteButton" onClick={toggleMute}>
            {muted ? 'Unmute 🔊' : 'Mute 🔇'}
          </button>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="howItWorksSection">
        <h2 className="sectionTitle" style={{fontSize: isMobile ? "1.5rem" : "2rem"}}>How It Works</h2>
        <div className="stepContainer" style={{flexDirection: isMobile ? "column" : "row", alignItems: 'stretch'}}>
          {steps.map((step) => (
            <div key={step.number} className="stepCard" style={{flex: 1, padding: isMobile ? "15px" : "20px", marginBottom: isMobile ? "15px" : "0", display: 'flex', flexDirection: 'column'}}>
              <div className="stepIcon">{step.icon}</div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div className="stepNumber">Step {step.number}</div>
                <h3 className="stepTitle" style={{fontSize: isMobile ? "1.1rem" : "1.3rem"}}>{step.title}</h3>
                <p className="stepDescription" style={{fontSize: isMobile ? "0.95rem" : "1rem", marginTop: 'auto'}}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recognition Section */}
      <section className="recognitionSection">
        <h2 className="sectionTitle" style={{fontSize: isMobile ? "1.5rem" : "2rem"}}>🌟 TEAch Has Been Recognized By</h2>
        <div className="logoScroller">
          <div className="logoTrack">
            {repeatedLogos.map((logo, i) => (
              <div key={i} className="logoCard">
                <img src={logo.src} alt={logo.name} className="logoImage" style={{height: isMobile ? "50px" : "80px"}} />
                <p className="logoName">{logo.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Volunteer Section */}
      <section className="volunteerSection">
        <h2 className="volunteerTitle" style={{fontSize: isMobile ? "1.8rem" : "2.4rem"}}>
          ✨ Join Us Now – Change Young Lives Forever ✨
        </h2>
        <p className="volunteerText" style={{fontSize: isMobile ? "1rem" : "1.2rem"}}>
          Give just <span className="highlight">2 hours a week</span> and help empower the next generation to dream, learn, and achieve.
        </p>
        <Link 
          to="/volunteer" 
          className="volunteerButton"
          style={{fontSize: isMobile ? "1rem" : "1.2rem", padding: isMobile ? "10px 20px" : "12px 30px"}}
        >
          Become a Volunteer
        </Link>
      </section>
    </div>
  );
}

export default Home;
