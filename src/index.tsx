import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';

import './index.css';
import { theme } from './theme';

import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <App/>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);