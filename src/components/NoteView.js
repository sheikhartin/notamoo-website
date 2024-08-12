import React, { useState } from "react";
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const NoteView = () => {
  const [slug, setSlug] = useState("");
  const [password, setPassword] = useState("");
  const [note, setNote] = useState(null);
  const [error, setError] = useState(null);

  const fetchNote = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/notes/${slug}`, {
        params: { password },
      });
      setNote(response.data);
      setError(null);
    } catch (err) {
      setError(err.response.data.detail);
      setNote(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchNote();
  };

  return (
    <>
      <form
        className="fixed-grid has-1-cols has-4-cols-desktop"
        onSubmit={handleSubmit}
      >
        <div className="grid">
          <div className="cell field is-col-start-2-desktop is-col-span-2">
            <label className="label">
              <span className="has-text-danger">*</span>Note ID:
            </label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="cell field is-col-start-2-desktop is-col-span-2">
            <label className="label">Password:</label>
            <div className="control">
              <input
                className="input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="cell field is-col-start-2-desktop is-col-span-2 has-text-right">
            <div className="control">
              <button className="button is-primary" type="submit">
                Fetch
              </button>
            </div>
          </div>

          <div className="cell field is-col-start-2-desktop is-col-span-2">
            {error && (
              <div className="notification is-danger is-light">{error}</div>
            )}
            {note && (
              <>
                <label className="label">Content:</label>
                <div className="control">
                  <textarea
                    className="textarea has-fixed-size"
                    value={note.content}
                    readOnly
                  />
                </div>
                <p className="mt-2">
                  Created at {new Date(note.created_at).toString()}.
                </p>
              </>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default NoteView;
