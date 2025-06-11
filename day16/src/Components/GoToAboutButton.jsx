import React from 'react';
import { useNavigate } from 'react-router-dom';

const GoToAboutButton = () => {
  const navigate = useNavigate();
  return <button onClick={() => navigate('/about')}>Go to About</button>;
};

export default GoToAboutButton;
