import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import * as MUI from '@mui/material'

const darkTheme = MUI.createTheme({
  palette: {
    mode: 'dark',
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MUI.ThemeProvider theme={darkTheme}>
      <MUI.CssBaseline />
        <App />
    </MUI.ThemeProvider>
  </React.StrictMode>,
)
