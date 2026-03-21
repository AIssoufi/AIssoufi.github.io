import { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Experiences, Home, Projects, Skills } from '../pages';
import Header from './Header';
import Modal from './Modal';

import { WebApp } from './App.styled';

function App() {
  const [openTemporaryModal, setOpenTemporaryModal] = useState(true);

  const handleCloseModal = () => {
    setOpenTemporaryModal(false);
  };

  return (
    <Router>
      <WebApp data-testid="app">
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
      </WebApp>
    </Router>
  );
}

export default App;
