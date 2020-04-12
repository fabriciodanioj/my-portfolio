import React from "react";

import usePersistedState from "./utils/usePersistedState";

import { ThemeProvider } from "styled-components";

import Routes from "./routes";
import GlobalStyles from "./styles/Global";

import { ThemeContext } from "./utils/ThemeContext";
import { LanguageContext } from "./utils/LanguageContext";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import ptBR from "./lang/ptBR";
import enUS from "./lang/enUS";

const App = () => {
  const [theme, setTheme] = usePersistedState("theme", light);
  const [lang, setLang] = usePersistedState("lang", ptBR);

  const toogleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  const toogleLang = () => {
    setLang(lang.key === "pt-BR" ? enUS : ptBR);
  };

  return (
    <ThemeContext.Provider value={{ toogleTheme, theme }}>
      <LanguageContext.Provider value={{ toogleLang, lang }}>
        <ThemeProvider theme={theme}>
          <div className="App">
            <GlobalStyles />

            <Routes />
          </div>
        </ThemeProvider>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
