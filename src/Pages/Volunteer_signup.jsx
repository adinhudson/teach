import React from "react";

const VolunteerSignup = () => {
  const styles = {
    page: {
      overflowX: "hidden",
      boxSizing: "border-box",
    },
    hero: {
      width: "100vw",
      marginLeft: "calc(-50vw + 50%)",
      marginRight: "calc(-50vw + 50%)",
      background: "linear-gradient(135deg, #eb7630, #eb7630)",
      padding: window.innerWidth <= 768 ? "40px 15px" : "60px 20px",
      textAlign: "center",
      color: "#fff",
      borderRadius: 0,
      marginBottom: "40px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
      boxSizing: "border-box",
      overflow: "hidden",
    },
    heroTitle: {
      fontSize: window.innerWidth <= 768 ? "2rem" : "2.5rem",
      fontWeight: "800",
      margin: "0 auto",
      maxWidth: "90%",
      padding: "0 10px",
      lineHeight: "1.3",
      wordWrap: "break-word",
    },
    heroText: {
      fontSize: "clamp(1rem, 3.5vw, 1.2rem)", // ✅ responsive text
      marginTop: "10px",
      lineHeight: "1.6",
    },
    container: {
      padding: "0 20px 60px 20px",
      maxWidth: "900px",
      margin: "0 auto",
      fontFamily: "Nunito, sans-serif",
      boxSizing: "border-box",
    },
    section: {
      marginBottom: "40px",
      padding: "30px 20px",
      borderRadius: "16px",
      boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
      background: "linear-gradient(135deg, #ffdab3, #ffa366, #eb7630)",
      color: "#fff",
      boxSizing: "border-box",
    },
    title: {
      fontSize: "26px",
      fontWeight: "bold",
      marginBottom: "15px",
      textAlign: "center",
    },
    iframe: {
      width: "100%",
      maxWidth: "100%",
      minHeight: "1200px",
      border: "none",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      display: "block",
    },
    ctaSection: {
      background: "linear-gradient(135deg, #ff8c42, #ff5e62)",
      color: "#fff",
      textAlign: "center",
      padding: "50px 20px",
      borderRadius: "16px",
      marginTop: "50px",
      boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
      boxSizing: "border-box",
    },
    ctaTitle: {
      fontSize: "clamp(1.6rem, 4.5vw, 2rem)", // ✅ scales properly
      fontWeight: "800",
      marginBottom: "15px",
      lineHeight: "1.4",
    },
    ctaText: {
      fontSize: "clamp(1rem, 3vw, 1.1rem)",
      marginBottom: "25px",
      lineHeight: "1.6",
    },
  };

  return (
    <div style={styles.page}>
      {/* Hero */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Become a Volunteer</h1>
        <p style={styles.heroText}>
          Give just 2 hours a week to change young lives 📚
        </p>
      </section>

      <div style={styles.container}>
        {/* Sign-Up Form */}
        <section style={styles.section}>
          <h2 style={styles.title}>📝 Sign Up Now</h2>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSd2KFGHAlqXYgQm_PeoIwy3NTeatjaXIpuH1aNzKCdrrabeuQ/viewform?embedded=true"
            style={styles.iframe}
            title="Volunteer Sign-Up Form"
          >
            Loading…
          </iframe>
        </section>

        {/* CTA Footer */}
        <section style={styles.ctaSection}>
          <h2 style={styles.ctaTitle}>🚀 Ready to Make a Difference?</h2>
          <p style={styles.ctaText}>
            Your 2 hours a week could transform a student’s future. Sign up today and be part of the change.
          </p>
        </section>
      </div>
    </div>
  );
};

export default VolunteerSignup;
