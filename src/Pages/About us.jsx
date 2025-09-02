import React from 'react';

const About = () => {
  const volunteers = [
    { name: 'Ayesha Fernando', role: 'Volunteer Teacher', img: '👤' },
    { name: 'Ravi Perera', role: 'Volunteer Teacher', img: '👤' },
    { name: 'Sithara Jayasinghe', role: 'Teaching Assistant', img: '👤' },
    { name: 'Nuwan Silva', role: 'Teaching Assistant', img: '👤' },
  ];

  const stories = [
    { student: 'Nimal', story: 'Once struggling with exams, Nimal worked with a TEAch tutor and earned top grades — opening doors to new opportunities.', img: 'Success story/Nimal.png' },
    { student: 'Anita', story: 'From being a shy student in our program to becoming a volunteer herself, Anita proves the ripple effect of education.', img: 'Success story/Anita.png' },
    { student: 'Kumar', story: 'Reading used to feel impossible for Kumar. Now he enjoys books and confidently takes part in class discussions.', img: 'Success story/Kumar.png' },
  ];

  const partners = [
    { name: 'Santander', img: 'brands/santander.png' },
    { name: 'World Vision Lanka', img: 'brands/world_vision_lanka.jpg' },
    { name: 'Sussex Innovation', img: 'brands/sussex.png' },
  ];

  const styles = {
    hero: {
      width: '100%',
      background: 'linear-gradient(135deg, #ff8c42, #ffb166)',
      padding: '60px 20px',
      textAlign: 'center',
      color: '#fff',
      borderRadius: '12px',
      marginBottom: '40px',
      boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
    },
    heroTitle: { fontSize: '2.5rem', fontWeight: '800', margin: 0 },
    container: {
      padding: '0 20px 60px 20px',
      maxWidth: '1000px',
      margin: '0 auto',
      fontFamily: 'Nunito, sans-serif',
    },
    section: {
      marginBottom: '40px',
      padding: '30px 20px',
      borderRadius: '16px',
      boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
    },
    projectSection: { background: 'linear-gradient(135deg, #fff2e6, #ffd9b3)' },
    visionSection: { background: 'linear-gradient(135deg, #ffe0b2, #ffcc80)' },
    volunteersSection: { background: 'linear-gradient(135deg, #ffd699, #ffb84d)' },
    partnersSection: { background: 'linear-gradient(135deg, #ffe6cc, #ffb366)' },
    storiesSection: { background: 'linear-gradient(135deg, #fff0e6, #ff9966)' },
    title: { fontSize: '26px', fontWeight: 'bold', marginBottom: '15px', color: '#ff6b42', textAlign: 'center' },
    text: { fontSize: '16px', lineHeight: '1.7', marginBottom: '12px', color: '#333' },

    cardContainer: {
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    card: {
      background: '#fff4ee',
      padding: '20px',
      borderRadius: '12px',
      flex: '1 1 220px',
      maxWidth: '250px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontSize: '1.2rem',
    },
    cardImg: {
      fontSize: '64px',
      marginBottom: '15px',
    },
    partnerImg: {
      maxWidth: '100%',
      maxHeight: '100px',
      objectFit: 'contain',
      marginBottom: '15px',
    },
    storyImg: {
      width: '150px',
      height: '150px',
      objectFit: 'cover',
      borderRadius: '12px',
      marginBottom: '15px',
    },
    ctaSection: {
      background: 'linear-gradient(135deg, #ff8c42, #ff5e62)',
      color: '#fff',
      textAlign: 'center',
      padding: '50px 20px',
      borderRadius: '16px',
      marginTop: '50px',
      boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
    },
    ctaTitle: { fontSize: '2rem', fontWeight: '800', marginBottom: '15px' },
    ctaText: { fontSize: '1.1rem', marginBottom: '25px', lineHeight: '1.6' },
    button: {
      background: '#fff',
      color: '#ff5e42',
      border: 'none',
      padding: '12px 28px',
      fontSize: '16px',
      fontWeight: '700',
      borderRadius: '50px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>About Us</h1>
      </section>

      <div style={styles.container}>
        {/* Project Overview */}
        <section style={{ ...styles.section, ...styles.projectSection }}>
          <h2 style={styles.title}>📘 Project Overview</h2>
          <p style={styles.text}>
            Our initiative helps students in Sri Lanka’s tea plantation communities improve exam success by providing
            <strong style={{ color: '#ff6b42' }}> live digital classes </strong> for
            <strong style={{ color: '#ff6b42' }}> Grades 9-11 </strong> in
            <strong style={{ color: '#ff6b42' }}> English, Maths, and Science </strong> 📚.
          </p>
          <p style={styles.text}>
            Students gather in local hubs where lessons are streamed on large screens by
            <strong style={{ color: '#ff6b42' }}> qualified volunteer teachers </strong> 👩‍🏫.
          </p>
          <p style={styles.text}>
            The program serves <strong style={{ color: '#ff6b42' }}>10 communities</strong> in the Central Province over a minimum of 2 years.
            <strong style={{ color: '#ff6b42' }}> 30 volunteer teachers </strong> and
            <strong style={{ color: '#ff6b42' }}> 30 teaching assistants </strong> provide lesson notes, study guides, and support 📝.
          </p>
        </section>

        {/* Vision */}
        <section style={{ ...styles.section, ...styles.visionSection }}>
          <h2 style={styles.title}>🌍 Our Vision</h2>
          <p style={styles.text}>With <strong style={{ color: '#ff6b42' }}>91% of estate families</strong> now having smartphone internet access, education is finally within reach.</p>
          <p style={styles.text}>In partnership with <strong style={{ color: '#ff6b42' }}>World Vision Lanka</strong>, our first phase brings <strong style={{ color: '#ff6b42' }}>300+ students</strong> into live classes for Maths, English, and Science.</p>
          <p style={styles.text}>These lessons help prepare students for their <strong style={{ color: '#ff6b42' }}>GCE O-Level exams</strong>, streamed directly into schools.</p>
        </section>

        {/* Volunteers */}
        <section style={{ ...styles.section, ...styles.volunteersSection }}>
          <h2 style={styles.title}>🙋 Meet Our Volunteers</h2>
          <div style={styles.cardContainer}>
            {volunteers.map((volunteer, index) => (
              <div key={index} style={styles.card}>
                <div style={styles.cardImg}>{volunteer.img}</div>
                <h3>{volunteer.name}</h3>
                <p>{volunteer.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Partners */}
        <section style={{ ...styles.section, ...styles.partnersSection }}>
          <h2 style={styles.title}>🤝 Our Partners</h2>
          <div style={styles.cardContainer}>
            {partners.map((partner, index) => (
              <div key={index} style={styles.card}>
                <img src={partner.img} alt={partner.name} style={styles.partnerImg} />
                <h3>{partner.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Success Stories */}
        <section style={{ ...styles.section, ...styles.storiesSection }}>
          <h2 style={styles.title}>🌟 Success Stories</h2>
          <div style={styles.cardContainer}>
            {stories.map((story, index) => (
              <div key={index} style={styles.card}>
                <img src={story.img} alt={story.student} style={styles.storyImg} />
                <p><strong>{story.student}</strong></p>
                <p>{story.story}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section style={styles.ctaSection}>
          <h2 style={styles.ctaTitle}>🚀 Join Us Now to Change Young Lives</h2>
          <p style={styles.ctaText}>
            Be part of a movement that empowers children with the gift of education. <br />
            Your time, skills, and passion can open doors to a brighter tomorrow.
          </p>
          <button
            style={styles.button}
            onMouseOver={e => e.currentTarget.style.background = '#ffe0d1'}
            onMouseOut={e => e.currentTarget.style.background = '#fff'}
            onClick={() => window.location.href = "/signup"}
          >
            Become a Volunteer
          </button>
        </section>
      </div>
    </div>
  );
};

export default About;
