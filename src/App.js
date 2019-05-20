import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from './views/router';

const BasicExample = () => {
  return (
    <Router>
      <MainRouter />
    </Router>
  );
};

export default BasicExample;
