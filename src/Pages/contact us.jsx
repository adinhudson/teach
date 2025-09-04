import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });

  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_CONTACT_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert('✅ Your message has been sent!');
          setFormData({ name: '', email: '', subject: '', phone: '', message: '' });
        },
        (error) => {
          alert('❌ Something went wrong. Please try again.');
          console.error(error.text);
        }
      );
  };

  const styles = {
    hero: {
      width: '100%',
      background: 'linear-gradient(135deg, #ffa366, #eb7630)',
      padding: '60px 20px',
      textAlign: 'center',
      color: '#fff',
      borderRadius: '12px',
      marginBottom: '40px',
      boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
    },
    heroTitle: { fontSize: '2.5rem', fontWeight: '800', marginBottom: '10px' },
    heroSubtitle: { fontSize: '1.2rem', fontWeight: '500' },
    container: { padding: '0 20px 60px 20px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'Nunito, sans-serif' },
    section: { marginBottom: '40px', padding: '30px 20px', borderRadius: '16px', boxShadow: '0 6px 16px rgba(0,0,0,0.15)' },
    title: { fontSize: '26px', fontWeight: 'bold', marginBottom: '20px', color: '#ff6b42', textAlign: 'center' },
    text: { fontSize: '16px', lineHeight: '1.7', marginBottom: '12px', color: '#333', textAlign: 'center' },
    cardContainer: { display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '30px' },
    card: { flex: '1 1 220px', maxWidth: '250px', padding: '20px', borderRadius: '12px', background: '#fff4ee', textAlign: 'center', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' },
    cardTitle: { fontWeight: '700', marginBottom: '5px', color: '#eb7630' },
    cardText: { fontSize: '14px', color: '#333' },
    form: { display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' },
    input: { padding: '12px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '16px' },
    textarea: { padding: '12px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '16px', resize: 'vertical' },
    button: { background: '#ff8c42', color: '#fff', border: 'none', padding: '12px', borderRadius: '50px', fontWeight: '700', cursor: 'pointer', transition: '0.3s' },
    map: { width: '100%', height: '300px', borderRadius: '12px', border: 'none', marginTop: '20px' }
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Contact Us</h1>
        <p style={styles.heroSubtitle}>We’d love to hear from you. Reach out with any questions or feedback!</p>
      </section>

      <div style={styles.container}>
        {/* Contact Info Cards */}
        <section style={styles.section}>
          <h2 style={styles.title}>📞 Get in Touch</h2>
          <div style={styles.cardContainer}>
            <div style={styles.card}>
              <div style={styles.cardTitle}>Phone</div>
              <div style={styles.cardText}>+94 123 456 789</div>
            </div>
            <div style={styles.card}>
              <div style={styles.cardTitle}>Email</div>
              <div style={styles.cardText}>hello@teachemergency.org</div>
            </div>
            <div style={styles.card}>
              <div style={styles.cardTitle}>Volunteers</div>
              <div style={styles.cardText}>volunteer@teachemergency.org</div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section style={styles.section}>
          <h2 style={styles.title}>✉ Send a Message</h2>
          <form ref={formRef} style={styles.form} onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name (Required)" required style={styles.input} value={formData.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email Address (Required)" required style={styles.input} value={formData.email} onChange={handleChange} />
            <input type="text" name="subject" placeholder="Subject (Required)" required style={styles.input} value={formData.subject} onChange={handleChange} />
            <input type="text" name="phone" placeholder="Phone" style={styles.input} value={formData.phone} onChange={handleChange} />
            <textarea name="message" placeholder="Message" required rows="5" style={styles.textarea} value={formData.message} onChange={handleChange} />
            <button type="submit" style={styles.button}>Send Message</button>
          </form>
        </section>

        {/* Map Section */}
        <section style={styles.section}>
          <h2 style={styles.title}>🗺 Our Coverage</h2>
          <iframe
            title="Sri Lanka Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158199.74815269178!2d79.76445686000001!3d7.873054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25e8b5e1d1d5f%3A0x0!2sSri%20Lanka!5e0!3m2!1sen!2slk!4v1694134512345!5m2!1sen!2slk"
            style={styles.map}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </section>
      </div>
    </div>
  );
};

export default Contact;
