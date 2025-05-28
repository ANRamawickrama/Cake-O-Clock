import React from 'react';

function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Sweet Bites. All rights reserved.</p>
      <p>Follow us on 
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer"> Instagram</a> | 
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer"> Facebook</a>
      </p>
    </footer>
  );
}

export default Footer;
