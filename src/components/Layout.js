import React from "react";
import { Link } from "react-router-dom";

import "../styles/main.css";

const Layout = ({ children }) => (
  <>
    <nav className="navbar">
      <div className="navbar-brand mx-auto is-justify-content-center">
        <Link
          className="navbar-item is-family-secondary is-size-3 has-text-white"
          to="/"
        >
          Notamoo
        </Link>
      </div>
    </nav>

    {children}

    <footer className="footer mt-3">
      <div className="content has-text-centered">
        <p>© 2024 Notamoo. All rights reserved.</p>
      </div>
    </footer>
  </>
);

export default Layout;
