import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Experiences, Home, Projects, Skills } from '../pages';
import Header from './Header';
import Modal from './Modal';

import './App.css';

function App() {
  const [openTemporaryModal, setOpenTemporaryModal] = useState(true);

  const handleCloseModal = () => {
    setOpenTemporaryModal(false);
  };

  return (
    <Router>
      <div
        className="web-app"
        data-testid="app"
      >
        <Header />
        <Routes>
          <Route
            path="/projects"
            element={<Projects />}
          />
          <Route
            path="/experiences"
            element={<Experiences />}
          />
          <Route
            path="/skills"
            element={<Skills />}
          />
          <Route
            path="/"
            element={<Home />}
          />
        </Routes>
        <Modal
          displayModal={openTemporaryModal}
          onClose={handleCloseModal}
        />
      </div>
    </Router>
  );
}

export default App;
