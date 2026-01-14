import React from 'react'
import Buttons from './components/mui/Buttons';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MyApp from "./components/mui/MyApp"


const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});


const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Buttons />
        <MyApp />
      </ThemeProvider>
    </>
  );
}

export default App