import React from "react";

import usePersistedState from "./utils/usePersistedState";

import { ThemeProvider } from "styled-components";

import Routes from "./routes";
import GlobalStyles from "./styles/Global";

import { ThemeContext } from "./utils/ThemeContext";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

const App = () => {
  const [theme, setTheme] = usePersistedState("theme", light);

  const toogleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeContext.Provider value={{ toogleTheme, theme }}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <GlobalStyles />

          <Routes />
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
