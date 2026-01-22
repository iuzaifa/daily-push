import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState, useMemo } from "react";
import { getTheme } from "../theme";
import { ColorModeContext } from "../theme/ColorModeContext";



function App() {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      mode,
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    [mode],
  );

  const theme = useMemo(() => getTheme(mode), [mode]);


  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={router} />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
