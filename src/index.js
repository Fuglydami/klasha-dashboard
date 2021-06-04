import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import reportWebVitals from './reportWebVitals';

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Founders Grotesk", "Roboto", sans-serif'
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 680,
      md: 884,
      lg: 1280,
      xl: 1920
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#FFFFFF',
          color: '#2A2A2A'
        }
      }
    },
    MuiPickersDay: {
      daySelected: {
        backgroundColor: '#2C665D'
      }
    },
    MuiTab: {
      textColorInherit: {
        opacity: 1
      }
    }
  }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
