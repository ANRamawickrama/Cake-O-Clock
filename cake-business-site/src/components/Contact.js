import React from 'react';

function Contact() {
  return (
    <section style={{ padding: '20px', backgroundColor:' #f5f5f5' }}>
      <h2>Contact Us</h2>
      <form style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px' }}>
        <input type="text" placeholder="Your Name" required style={{ margin: '5px 0' }} />
        <input type="email" placeholder="Your Email" required style={{ margin: '5px 0' }} />
        <textarea placeholder="Your Message" rows="4" required style={{ margin: '5px 0' }} />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
