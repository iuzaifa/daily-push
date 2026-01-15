import { ThemeProvider } from "@emotion/react";
import Header from "./components/Header";
import CssBaseline from "@mui/material/CssBaseline";
import mytheme from "./components/ui/MyTheme";




function App() {
  return (
    <>
      <ThemeProvider theme={mytheme}>
        <CssBaseline />
        <Header />
      </ThemeProvider>
    </>
  );
}

export default App;
