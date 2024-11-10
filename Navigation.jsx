import React from 'react';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="logo">
        <h1>Logo</h1>
      </div>

      <div className="links">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>

      {/* Closing tags for div and nav */}
    </nav>
  );
};

export default Navigation;
