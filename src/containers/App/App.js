import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from '../../routes';
import { CssBaseline } from '@material-ui/core';



const App = () => (
  <>
    <CssBaseline />
    <Router>
      <Routes />
    </Router>

  </>
);

export default App;