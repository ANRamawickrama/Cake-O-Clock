import React from 'react';

function Header() {
  return (
    <header className="header">
      <nav class="navbar">
        <div class="navbar-left">
          <img src="images/logo.png" alt="Logo" class="logo" />
        </div>
        <div class="navbar-center">
          <h1 class="title">Cake'O Clock</h1>
        </div>
    </nav>
    </header>
  );
}

export default Header;
