import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

const VolunteerSignup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    availability: "",
    motivation: "",
    backgroundCheck: false,
  });

  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("🎉 Thank you for signing up as a volunteer!");
          console.log("Volunteer Form Submitted:", form);
          setForm({
            name: "",
            email: "",
            phone: "",
            experience: "",
            availability: "",
            motivation: "",
            backgroundCheck: false,
          });
        },
        (error) => {
          alert("❌ Something went wrong. Please try again.");
          console.error(error.text);
        }
      );
  };

  const styles = {
    hero: {
      width: "100%",
      background: "linear-gradient(135deg, #eb7630, #eb7630)",
      padding: "60px 20px",
      textAlign: "center",
      color: "#fff",
      borderRadius: "12px",
      marginBottom: "40px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    },
    heroTitle: { fontSize: "2.5rem", fontWeight: "800", margin: 0 },
    heroText: { fontSize: "1.2rem", marginTop: "10px" },
    container: {
      padding: "0 20px 60px 20px",
      maxWidth: "900px",
      margin: "0 auto",
      fontFamily: "Nunito, sans-serif",
    },
    section: {
      marginBottom: "40px",
      padding: "30px 20px",
      borderRadius: "16px",
      boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
    },
    whySection: { background: "linear-gradient(135deg, #fff2e6, #ffd9b3)" },
    requirementsSection: { background: "linear-gradient(135deg, #ffe0b2, #ffcc80)" },
    formSection: { background: "linear-gradient(135deg, #ffd699, #ffb84d)" },
    title: {
      fontSize: "26px",
      fontWeight: "bold",
      marginBottom: "15px",
      color: "#ff6b42",
      textAlign: "center",
    },
    text: { fontSize: "16px", lineHeight: "1.7", marginBottom: "12px", color: "#333" },
    cardContainer: {
      display: "flex",
      gap: "20px",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    card: {
      background: "#fff4ee",
      padding: "20px",
      borderRadius: "12px",
      flex: "1 1 220px",
      maxWidth: "250px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      textAlign: "center",
      fontSize: "1rem",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    input: {
      padding: "12px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      fontSize: "1rem",
    },
    textarea: {
      padding: "12px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      fontSize: "1rem",
      minHeight: "100px",
    },
    checkbox: { marginRight: "10px" },
    button: {
      background: "#ff6b42",
      color: "#fff",
      border: "none",
      padding: "12px 28px",
      fontSize: "16px",
      fontWeight: "700",
      borderRadius: "50px",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    ctaSection: {
      background: "linear-gradient(135deg, #ff8c42, #ff5e62)",
      color: "#fff",
      textAlign: "center",
      padding: "50px 20px",
      borderRadius: "16px",
      marginTop: "50px",
      boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
    },
    ctaTitle: { fontSize: "2rem", fontWeight: "800", marginBottom: "15px" },
    ctaText: { fontSize: "1.1rem", marginBottom: "25px", lineHeight: "1.6" },
  };

  return (
    <div>
      {/* Hero */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Become a Volunteer</h1>
        <p style={styles.heroText}>Give just 2 hours a week to change young lives 📚</p>
      </section>

      <div style={styles.container}>
        {/* Why Volunteer */}
        <section style={{ ...styles.section, ...styles.whySection }}>
          <h2 style={styles.title}>🌟 Why Volunteer?</h2>
          <div style={styles.cardContainer}>
            <div style={styles.card}>
              📚 <strong>Empower Young Minds</strong><br/>
              Help students overcome challenges and succeed academically.
            </div>
            <div style={styles.card}>
              🌍 <strong>Create Opportunities</strong><br/>
              Support education in Sri Lanka and open doors for children who need guidance.
            </div>
            <div style={styles.card}>
              🤝 <strong>Join a Community</strong><br/>
              Connect with like-minded volunteers passionate about teaching and giving back.
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section style={{ ...styles.section, ...styles.requirementsSection }}>
          <h2 style={styles.title}>✅ What We Look For</h2>
          <ul style={styles.text}>
            <li>✅ Commit just <strong>2 hours per week</strong> to make a lasting impact</li>
            <li>✅ Access to a device and internet for online sessions</li>
            <li>✅ Comfortable teaching English, Maths, or Science</li>
            <li>✅ Successfully passed a <strong>background check</strong> to ensure student safety</li>
          </ul>
          <p style={styles.text}>
            If you’re passionate, patient, and excited to inspire the next generation, you’re exactly who we’re looking for!
          </p>
        </section>

        {/* Sign-Up Form */}
        <section style={{ ...styles.section, ...styles.formSection }}>
          <h2 style={styles.title}>📝 Sign Up Now</h2>
          <form ref={formRef} style={styles.form} onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} style={styles.input} required />
            <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} style={styles.input} required />
            <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} style={styles.input} />
            <input type="text" name="experience" placeholder="Teaching Experience (Yes/No)" value={form.experience} onChange={handleChange} style={styles.input} />
            <input type="text" name="availability" placeholder="Availability (e.g., Mon/Wed evenings)" value={form.availability} onChange={handleChange} style={styles.input} />
            <textarea name="motivation" placeholder="Why do you want to volunteer?" value={form.motivation} onChange={handleChange} style={styles.textarea} required></textarea>
            
            <button type="submit" style={styles.button}>Submit Application</button>
          </form>
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
