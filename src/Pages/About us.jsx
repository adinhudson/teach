import React from 'react';

const About = () => {
  const team = [
    { name: 'Jessica', role: 'Founder & CEO', img: '/teach/team/Jessica.png' },
    { name: 'Adin Hudson', role: 'Technical Support', img: '/teach/team/Adin.png' },
    { name: 'Dilshan Sivaperumal', role: 'Education Specialist', img: '/teach/team/Dilshan.png' },
    { name: 'Lydia Keenan', role: 'Education Specialist', img: '/teach/team/Lydia.png' },
  ];

  const stories = [
    { student: 'Nimal', story: 'Once struggling with exams, Nimal worked with a TEAch tutor and earned top grades — opening doors to new opportunities.', img: 'Success story/Nimal.png' },
    { student: 'Anita', story: 'From being a shy student in our program to becoming a volunteer herself, Anita proves the ripple effect of education.', img: 'Success story/Anita.png' },
    { student: 'Kumar', story: 'Reading used to feel impossible for Kumar. Now he enjoys books and confidently takes part in class discussions.', img: 'Success story/Kumar.png' },
  ];

  const partners = [
    { name: 'Santander', img: 'brands/santander.png' },
    { name: 'World Vision Lanka', img: 'brands/world vision lanka.jpg' },
    { name: 'Sussex Innovation', img: 'brands/sussex.png' },
  ];

  const styles = {
    hero: {
      width: '100%',
      background: 'linear-gradient(135deg, #ff8c42, #ffa366)',
      padding: '80px 20px',
      textAlign: 'center',
      color: '#fff',
    },
    heroTitle: {
      fontSize: '3rem',
      fontWeight: '800',
      margin: 0,
    },
    container: {
      padding: '60px 20px',
      maxWidth: '1000px',
      margin: '0 auto',
      fontFamily: 'Nunito, sans-serif',
    },
    section: { marginBottom: '50px' },
    title: { fontSize: '30px', fontWeight: 'bold', marginBottom: '20px', color: '#ff8c42' },
    text: { fontSize: '17px', lineHeight: '1.7', marginBottom: '15px', color: '#333' },
    cardContainer: { display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' },
    card: { 
      background: '#fff4ee', 
      padding: '20px', 
      borderRadius: '12px', 
      flex: '1 1 250px', 
      maxWidth: '280px', 
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
      textAlign: 'center' 
    },
    cardImg: { 
      width: '150px',     
      height: '150px',     
      objectFit: 'contain', 
      borderRadius: '12px', 
      marginBottom: '10px', 
      transition: 'transform 0.3s, filter 0.3s', 
      cursor: 'pointer' 
    },
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}> About Us</h1>
      </section>

      {/* Main Content */}
      <div style={styles.container}>
        {/* Who We Are */}
        <section style={styles.section}>
          <h2 style={styles.title}>✨ Who We Are</h2>
          <p style={styles.text}>
            Two centuries ago, Sri Lanka’s tea industry began with workers brought from South India. 
            They faced harsh conditions and few rights — and generations later, their families are still among the most marginalized. 
          </p>
          <p style={styles.text}>
            Many children from these communities drop out of school early, trapped in cycles of poverty. 
            That’s where <strong>TEAch</strong> steps in.  
          </p>
          <p style={styles.text}>
            We connect <strong>volunteer tutors</strong> with students who cannot afford private support. 
            More than lessons, we provide encouragement, hope, and the chance to dream of a brighter future.  
          </p>
        </section>

        {/* Our Vision */}
        <section style={styles.section}>
          <h2 style={styles.title}>🌍 Our Vision</h2>
          <p style={styles.text}>
            With <strong>91% of estate families now having smartphone internet access</strong>, education is finally within reach.  
          </p>
          <p style={styles.text}>
            In partnership with <strong>World Vision Lanka</strong>, our first phase launches in September, 
            bringing <strong>300+ students</strong> in Bogowanthalawa, Watawala, and Lindula into live classes for Maths, English, and Science.  
          </p>
          <p style={styles.text}>
            These lessons help prepare students for their <strong>GCE O-Level exams</strong>, streamed directly into schools — 
            giving them the tools to succeed like never before.  
          </p>
        </section>

        {/* Meet the Team */}
        <section style={styles.section}>
          <h2 style={styles.title}>👩‍🏫 Meet the Team</h2>
          <div style={styles.cardContainer}>
            {team.map((member, index) => (
              <div key={index} style={styles.card}>
                <img 
                  src={member.img} 
                  alt={member.name} 
                  style={styles.cardImg} 
                  onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.filter = 'brightness(1.2)'; }}
                  onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.filter = 'brightness(1)'; }}
                />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Partners */}
        <section style={styles.section}>
          <h2 style={styles.title}>🤝 Our Partners</h2>
          <p style={styles.text}>
            TEAch is made possible thanks to the support of global partners who believe in the power of education.  
          </p>
          <div style={styles.cardContainer}>
            {partners.map((partner, index) => (
              <div key={index} style={styles.card}>
                <img 
                  src={partner.img} 
                  alt={partner.name} 
                  style={styles.cardImg} 
                  onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.filter = 'brightness(1.2)'; }}
                  onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.filter = 'brightness(1)'; }}
                />
                <h3>{partner.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Success Stories */}
        <section style={styles.section}>
          <h2 style={styles.title}>🌟 Success Stories</h2>
          <div style={styles.cardContainer}>
            {stories.map((story, index) => (
              <div key={index} style={styles.card}>
                <img 
                  src={story.img} 
                  alt={story.student} 
                  style={{...styles.cardImg, width: '160px', height: '160px'}} 
                  onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.filter = 'brightness(1.2)'; }}
                  onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.filter = 'brightness(1)'; }}
                />
                <p><strong>{story.student}</strong></p>
                <p>{story.story}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
