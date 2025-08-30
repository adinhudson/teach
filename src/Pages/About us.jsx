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
      background: 'linear-gradient(135deg, #ff8c42, #ffb166)',
      padding: '80px 20px',
      textAlign: 'center',
      color: '#fff',
      borderRadius: '12px',
      marginBottom: '40px',
      boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
    },
    heroTitle: { fontSize: '3rem', fontWeight: '800', margin: 0 },
    container: { padding: '0 20px 60px 20px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'Nunito, sans-serif' },
    section: { marginBottom: '50px', padding: '40px 30px', borderRadius: '16px', boxShadow: '0 6px 16px rgba(0,0,0,0.15)' },
    projectSection: { background: 'linear-gradient(135deg, #fff2e6, #ffd9b3)' },
    visionSection: { background: 'linear-gradient(135deg, #ffe0b2, #ffcc80)' },
    teamSection: { background: 'linear-gradient(135deg, #ffd699, #ffb84d)' },
    partnersSection: { background: 'linear-gradient(135deg, #ffe6cc, #ffb366)' },
    storiesSection: { background: 'linear-gradient(135deg, #fff0e6, #ff9966)' },
    title: { fontSize: '30px', fontWeight: 'bold', marginBottom: '20px', color: '#ff6b42' },
    text: { fontSize: '17px', lineHeight: '1.7', marginBottom: '15px', color: '#333' },
    cardContainer: { display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' },
    card: { 
      background: '#fff4ee', padding: '20px', borderRadius: '12px', flex: '0 0 250px', maxWidth: '250px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'
    },
    cardImg: { width: '150px', height: '150px', objectFit: 'contain', borderRadius: '12px', marginBottom: '15px', transition: 'transform 0.3s, filter 0.3s', cursor: 'pointer' },
    ctaSection: { background: 'linear-gradient(135deg, #ff8c42, #ff5e62)', color: '#fff', textAlign: 'center', padding: '70px 20px', borderRadius: '16px', marginTop: '60px', boxShadow: '0 6px 16px rgba(0,0,0,0.2)' },
    ctaTitle: { fontSize: '2.5rem', fontWeight: '800', marginBottom: '20px' },
    ctaText: { fontSize: '1.2rem', marginBottom: '30px', lineHeight: '1.6' },
    button: { background: '#fff', color: '#ff5e42', border: 'none', padding: '15px 35px', fontSize: '18px', fontWeight: '700', borderRadius: '50px', cursor: 'pointer', transition: 'all 0.3s ease' },
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}> About Us</h1>
      </section>

      <div style={styles.container}>
        {/* Project Overview */}
        <section style={{...styles.section, ...styles.projectSection}}>
          <h2 style={styles.title}>📘 Project Overview</h2>
          <p style={{fontWeight: '600', color: '#444', lineHeight: '2'}}>
            Our initiative helps students in Sri Lanka’s tea plantation communities improve exam success by providing 
            <strong style={{color: '#ff6b42'}}> live digital classes </strong> for 
            <strong style={{color: '#ff6b42'}}> Grades 9-11 </strong> in 
            <strong style={{color: '#ff6b42'}}> English, Maths, and Science </strong> 📚.
          </p>
          <p style={{fontWeight: '500', color: '#555', lineHeight: '1.9'}}>
            Students gather in local hubs where lessons are streamed on large screens by 
            <strong style={{color: '#ff6b42'}}> qualified volunteer teachers </strong> 👩‍🏫. 
          </p>
          <p style={{fontWeight: '500', color: '#555', lineHeight: '1.9'}}>
            The program serves <strong style={{color: '#ff6b42'}}>10 communities</strong> in the Central Province over a minimum of 2 years. 
            <strong style={{color: '#ff6b42'}}> 30 volunteer teachers </strong> and 
            <strong style={{color: '#ff6b42'}}> 30 teaching assistants </strong> provide lesson notes, study guides, and support 📝.
          </p>
        </section>

        {/* Vision */}
        <section style={{...styles.section, ...styles.visionSection}}>
          <h2 style={styles.title}>🌍 Our Vision</h2>
          <p style={styles.text}>With <strong style={{color:'#ff6b42'}}>91% of estate families</strong> now having smartphone internet access, education is finally within reach.</p>
          <p style={styles.text}>In partnership with <strong style={{color:'#ff6b42'}}>World Vision Lanka</strong>, our first phase brings <strong style={{color:'#ff6b42'}}>300+ students</strong> into live classes for Maths, English, and Science.</p>
          <p style={styles.text}>These lessons help prepare students for their <strong style={{color:'#ff6b42'}}>GCE O-Level exams</strong>, streamed directly into schools.</p>
        </section>

        {/* Team */}
        <section style={{...styles.section, ...styles.teamSection}}>
          <h2 style={styles.title}>👩‍🏫 Meet the Team</h2>
          <div style={styles.cardContainer}>
            {team.map((member, index) => (
              <div key={index} style={styles.card}>
                <img src={member.img} alt={member.name} style={styles.cardImg} 
                  onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.filter = 'brightness(1.2)'; }}
                  onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.filter = 'brightness(1)'; }}
                />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Partners */}
        <section style={{...styles.section, ...styles.partnersSection}}>
          <h2 style={styles.title}>🤝 Our Partners</h2>
          <div style={styles.cardContainer}>
            {partners.map((partner, index) => (
              <div key={index} style={styles.card}>
                <img src={partner.img} alt={partner.name} style={styles.cardImg} 
                  onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.filter = 'brightness(1.2)'; }}
                  onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.filter = 'brightness(1)'; }}
                />
                <h3>{partner.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Success Stories */}
        <section style={{...styles.section, ...styles.storiesSection}}>
          <h2 style={styles.title}>🌟 Success Stories</h2>
          <div style={styles.cardContainer}>
            {stories.map((story, index) => (
              <div key={index} style={styles.card}>
                <img src={story.img} alt={story.student} style={{...styles.cardImg, width: '160px', height: '160px'}} 
                  onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.filter = 'brightness(1.2)'; }}
                  onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.filter = 'brightness(1)'; }}
                />
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
          <button style={styles.button} onMouseOver={e => e.currentTarget.style.background = '#ffe0d1'} onMouseOut={e => e.currentTarget.style.background = '#fff'} onClick={() => window.location.href = "/signup"}>
            Become a Volunteer
          </button>
        </section>
      </div>
    </div>
  );
};

export default About;
