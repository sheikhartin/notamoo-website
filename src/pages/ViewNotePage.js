import React from "react";
import { Helmet } from "react-helmet";

import NoteView from "../components/NoteView";

const ViewNotePage = () => (
  <>
    <Helmet>
      <title>Read a Note - Notamoo</title>
    </Helmet>

    <section className="section">
      <NoteView />
    </section>
  </>
);

export default ViewNotePage;
