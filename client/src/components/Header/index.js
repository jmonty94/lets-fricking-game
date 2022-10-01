import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-info text-dark mb-4 py-3 display-flex align-center">
        <div className="container flex-column justify-space-between-lg justify-center align-center text-center">
          {/* Use Link component to create a link that returns to the homepage on click */}
          <Link className="text-dark" to="/">
            <h1 className="m-0" style={{ fontSize: '3rem' }}>
              Lets Frickin Game
            </h1>
          </Link>
          <Link className="text-dark" to="/">
          <h2>Profile</h2>
          </Link>
          <Link className="text-dark" to="/">
          <h2>Sign In / Sign Up</h2>
          </Link>
        </div>
      </header>
    );
  };

export default Header;
