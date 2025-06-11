import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Team from './components/Team';
import Company from './components/Company';
import NotFound from './components/NotFound';
import Protected from './components/Protected';
import Navbar from './components/Navbar';
import GoToAboutButton from './components/GoToAboutButton';

const Task = () => {
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

export default Task;
