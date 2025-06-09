import React from 'react';

function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Cake'O Clock. All rights reserved.</p>
      <p>Follow us on 
        <a href="https://www.facebook.com/share/1FN59JeY7B/?mibextid=wwXIfr" target="_blank" rel="noreferrer"> Facebook</a> |
        <a href="https://www.tiktok.com/@cakeoclock04?_t=ZS-8wkdJTIav28&_r=1" target="_blank" rel="noreferrer"> Tiktok</a> 
      </p>
    </footer>
  );
}

export default Footer;
