import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const HomePage = () => (
  <>
    <Helmet>
      <title>Home - Notamoo</title>
    </Helmet>

    <section className="section">
      <h3 className="subtitle is-3 is-family-secondary has-text-centered">
        Create Secure Notes for Trusted People!
      </h3>

      <div className="buttons is-justify-content-center are-medium">
        <Link className="button" to="/create-note">
          Create a Note
        </Link>
        <Link className="button" to="/view-note">
          Read a Note
        </Link>
      </div>
    </section>
  </>
);

export default HomePage;
