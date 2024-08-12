import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import CreateNotePage from "./pages/CreateNotePage";
import ViewNotePage from "./pages/ViewNotePage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-note" element={<CreateNotePage />} />
        <Route path="/view-note" element={<ViewNotePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;
