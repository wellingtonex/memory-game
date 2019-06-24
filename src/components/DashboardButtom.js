import React from 'react';
import { Button } from '@material-ui/core';

const DashboardButtom = ({ children }) => (
  <Button variant="outlined" color="primary" size="large" fullWidth>
    {children}
  </Button>
);

export default DashboardButtom;