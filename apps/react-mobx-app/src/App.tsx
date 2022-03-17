import React, { useState } from 'react';
import Router from './router/Router';
import { CssBaseline, Theme, ThemeProvider } from '@mui/material';
import { lightTheme } from './themes/light';
import { darkTheme } from './themes/dark';

function App() {
  const [theme, setTheme] = useState('light');

  const getTheme = (): Theme => {
    return theme === 'light' ? lightTheme : darkTheme;
  };

  return (
    <>
      <ThemeProvider theme={getTheme()}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
