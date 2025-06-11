import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import Team from './Components/Team';
import Company from './Components/Company';
import NotFound from './Components/NotFound';
import Protected from './Components/Protected';
import Navbar from './Components/Navbar';
import GoToAboutButton from './Components/GoToAboutButton';

const App = () => {
  const isLoggedIn = false;

  return (
    <BrowserRouter>
      <div style={{ padding: '1rem' }}>
        <h1>React Router Task</h1>
        <Navbar />
        <GoToAboutButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="team" element={<Team />} />
            <Route path="company" element={<Company />} />
          </Route>
          <Route path="/protected" element={<Protected isLoggedIn={isLoggedIn} />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
