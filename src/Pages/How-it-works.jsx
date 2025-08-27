import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Sign Up',
      description: 'Students and volunteers create accounts with TEAch using their email or social login. It only takes a few minutes.',
      icon: '👤',
    },
    {
      number: 2,
      title: 'Connect',
      description: 'Students are matched with volunteer tutors based on subject, grade, and availability.',
      icon: '🔗',
    },
    {
      number: 3,
      title: 'Learn',
      description: 'Tutors provide live online classes and support students with homework, revision, and guidance.',
      icon: '📚',
    },
    {
      number: 4,
      title: 'Grow',
      description: 'Students gain confidence, improve grades, and open doors to new educational opportunities.',
      icon: '🚀',
    },
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
    stepContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '40px',
      marginTop: '40px',
    },
    stepCard: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '20px',
      background: '#fff4ee',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s, box-shadow 0.3s',
    },
    stepIcon: {
      fontSize: '2.5rem',
    },
    stepNumber: {
      fontWeight: '800',
      fontSize: '1.2rem',
      color: '#ff8c42',
    },
    stepContent: {},
    stepTitle: {
      fontSize: '1.5rem',
      fontWeight: '700',
      margin: '0 0 5px 0',
    },
    stepDescription: {
      fontSize: '16px',
      color: '#333',
    },
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>How It Works</h1>
      </section>

      {/* Main Content */}
      <div style={styles.container}>
        <p style={{ textAlign: 'center', fontSize: '18px', color: '#333' }}>
          TEAch makes learning accessible and fun. Here’s how students and volunteers get started:
        </p>

        <div style={styles.stepContainer}>
          {steps.map((step) => (
            <div
              key={step.number}
              style={styles.stepCard}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
              }}
            >
              <div style={styles.stepIcon}>{step.icon}</div>
              <div style={styles.stepContent}>
                <div style={styles.stepNumber}>Step {step.number}</div>
                <h3 style={styles.stepTitle}>{step.title}</h3>
                <p style={styles.stepDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
