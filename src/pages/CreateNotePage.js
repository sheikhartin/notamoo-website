import React from "react";
import { Helmet } from "react-helmet";

import CreateNoteForm from "../components/NoteForm";

const CreateNotePage = () => (
  <>
    <Helmet>
      <title>Create a Note - Notamoo</title>
    </Helmet>

    <section className="section">
      <CreateNoteForm />
    </section>
  </>
);

export default CreateNotePage;
