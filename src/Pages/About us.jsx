import React from 'react';

const About = () => {
  const team = [
    { name: 'Jessica', role: 'Founder & CEO', img: '/teach/team/Jessica.png' },
    { name: 'Adin Hudson', role: 'Technical Support', img: '/teach/team/Adin.png' },
    { name: 'Dilshan Sivaperumal', role: 'Education Specialist', img: '/teach/team/Dilshan.png' },
    { name: 'Lydia Keenan', role: 'Education Specialist', img: '/teach/team/Lydia.png' },
    
  ];

  const awards = [
    
  ];

  const stories = [
    { student: 'Nimal', story: 'Received free tutoring and passed his exams with top grades!' },
    { student: 'Anita', story: 'Gained confidence and now volunteers herself.' },
    { student: 'Kumar', story: 'Improved reading skills and loves learning now!' },
  ];

  const styles = {
    container: { padding: '50px 20px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'Nunito, sans-serif' },
    section: { marginBottom: '50px' },
    title: { fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', color: '#ff8c42' },
    text: { fontSize: '16px', lineHeight: '1.6', marginBottom: '10px' },
    cardContainer: { display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' },
    card: { 
      background: '#fff4ee', 
      padding: '15px', 
      borderRadius: '12px', 
      flex: '1 1 200px', 
      maxWidth: '220px', 
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)', 
      textAlign: 'center' 
    },
    cardImg: { width: '120px', height: '120px', objectFit: 'cover', borderRadius: '50%', marginBottom: '10px' },
  };

  return (
    <div style={styles.container}>
      {/* Who We Are */}
      <section style={styles.section}>
        <h2 style={styles.title}>Who We Are</h2>
        <p style={styles.text}>
          TEAch Volunteers is a community-driven initiative dedicated to bridging education gaps in underserved communities. 
          We provide free tutoring to children, empowering them with knowledge and confidence.
        </p>
      </section>

      {/* Our Vision */}
      <section style={styles.section}>
        <h2 style={styles.title}>Our Vision</h2>
        <p style={styles.text}>
          We aim to create a world where every child, regardless of background, has access to quality education. 
          Our mission aligns with UN SDG 4: Quality Education.
        </p>
      </section>

      {/* Meet the Team */}
      <section style={styles.section}>
        <h2 style={styles.title}>Meet the Team</h2>
        <div style={styles.cardContainer}>
          {team.map((member, index) => (
            <div key={index} style={styles.card}>
              <img src={member.img} alt={member.name} style={styles.cardImg} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section style={styles.section}>
        <h2 style={styles.title}>Awards</h2>
        <ul>
          {awards.map((award, index) => (
            <li key={index} style={styles.text}>🏆 {award}</li>
          ))}
        </ul>
      </section>

      {/* Success Stories */}
      <section style={styles.section}>
        <h2 style={styles.title}>Success Stories</h2>
        <div style={styles.cardContainer}>
          {stories.map((story, index) => (
            <div key={index} style={styles.card}>
              <p><strong>{story.student}</strong></p>
              <p>{story.story}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
