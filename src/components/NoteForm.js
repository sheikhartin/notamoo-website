import React, { useState } from "react";
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const CreateNoteForm = () => {
  const [content, setContent] = useState("");
  const [password, setPassword] = useState("");
  const [viewLimit, setViewLimit] = useState("");
  const [expiresAt, setExpiresAt] = useState("");
  const [noteDetails, setNoteDetails] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const noteData = {
      content,
      password: password || null,
      view_limit: viewLimit ? parseInt(viewLimit, 10) : null,
      expires_at: expiresAt || null,
    };

    try {
      const response = await axios.post(`${API_BASE_URL}/api/notes`, noteData);
      setNoteDetails(response.data);
      setError(null);
    } catch (err) {
      const errorMsg = err.response.data.detail
        .map((detail) => detail.msg)
        .join("; ");
      setError(`${errorMsg}.`);
      setNoteDetails(null);
    }
  };

  return (
    <form
      className="fixed-grid has-1-cols has-4-cols-desktop"
      onSubmit={handleSubmit}
    >
      <div className="grid">
        <div className="cell field is-col-start-2-desktop is-col-span-2">
          <label className="label">
            <span className="has-text-danger">*</span>Note Content:
          </label>
          <div className="control">
            <textarea
              className="textarea has-fixed-size"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
        </div>
        <details className="cell is-col-start-2-desktop is-col-span-2">
          <summary className="has-text-centered">Advanced Options</summary>
          <div className="field">
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
          <div className="field">
            <label className="label">View Limit:</label>
            <div className="control">
              <input
                className="input"
                type="number"
                value={viewLimit}
                onChange={(e) => setViewLimit(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Expiration Date:</label>
            <div className="control">
              <input
                className="input"
                type="datetime-local"
                value={expiresAt}
                onChange={(e) => setExpiresAt(e.target.value)}
              />
            </div>
          </div>
        </details>
        <div className="cell field is-col-start-2-desktop is-col-span-2 has-text-right">
          <div className="control">
            <button className="button is-primary" type="submit">
              Create
            </button>
          </div>
        </div>

        <div className="cell field is-col-start-2-desktop is-col-span-2">
          {error && (
            <div className="notification is-danger is-light">{error}</div>
          )}
          {noteDetails && (
            <div className="notification is-success is-light">
              Your note with ID {noteDetails.slug} has been successfully created
              at {new Date(noteDetails.created_at).toString()}.
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default CreateNoteForm;
