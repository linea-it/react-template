import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import theme from './theme/MaterialTheme';

const API_URL =
  process.env.NODE_ENV === 'production'
    ? window._env_.REACT_APP_API_URL
    : process.env.REACT_APP_API_URL;

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <AppBar position="static">
        <Typography variant="h6" color="inherit">
          AppBar API: {API_URL}
        </Typography>
      </AppBar>
      <Button color="primary">Test Primary</Button>
      <Button color="secondary">Test Secondary</Button>
    </MuiThemeProvider>
  );
}

export default App;
