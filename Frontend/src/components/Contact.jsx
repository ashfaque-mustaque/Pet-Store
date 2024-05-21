import React from 'react';

const ContactPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Contact Us</h1>
      <p style={styles.description}>We'd love to hear from you! Whether you have questions about our pets, need assistance, or just want to share your pet adoption story, feel free to reach out.</p>
      
      <form style={styles.form}>
        <label style={styles.label} htmlFor="name">Name:</label>
        <input style={styles.input} type="text" id="name" name="name" required />
        
        <label style={styles.label} htmlFor="email">Email:</label>
        <input style={styles.input} type="email" id="email" name="email" required />
        
        <label style={styles.label} htmlFor="message">Message:</label>
        <textarea style={styles.textarea} id="message" name="message" rows="5" required></textarea>
        
        <button style={styles.button} type="submit">Send Message</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif'
  },
  header: {
    fontSize: '2.5em',
    margin: '20px 0'
  },
  description: {
    fontSize: '1.2em',
    margin: '20px 0'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  label: {
    marginTop: '10px',
    fontSize: '1em'
  },
  input: {
    width: '80%',
    padding: '10px',
    marginTop: '5px',
    fontSize: '1em',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  textarea: {
    width: '80%',
    padding: '10px',
    marginTop: '5px',
    fontSize: '1em',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1em',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default ContactPage;
