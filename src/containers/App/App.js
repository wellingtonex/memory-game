import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from '../../routes';
import { CssBaseline } from '@material-ui/core';

import { Provider as ReduxProvider } from 'react-redux';
import store from '../../store'


const App = () => (
  <ReduxProvider store={store}>
    <>
      <CssBaseline />
      <Router>
        <Routes />
      </Router>

    </>
  </ReduxProvider>
);

export default App;