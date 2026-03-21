import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Experiences, Home, Projects, Skills } from '../pages';
import Header from './Header';

import { WebApp } from './App.styled';

function App() {
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
      </WebApp>
    </Router>
  );
}

export default App;
