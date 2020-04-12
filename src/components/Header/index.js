import React, { useContext } from "react";

import Switch from "react-switch";

import { ThemeContext } from "../../utils/ThemeContext";
import { LanguageContext } from "../../utils/LanguageContext";

import {
  Container,
  ButtonLink,
  LinksBox,
  SetMode,
  SetModeText,
} from "./styles";

export default function Header() {
  const { toogleTheme, theme } = useContext(ThemeContext);
  const { toogleLang, lang } = useContext(LanguageContext);

  console.log(lang);
  return (
    <Container>
      <SetMode>
        <Switch
          onChange={toogleTheme}
          checked={theme.title === "dark"}
          offColor="#A8F9FF"
          onColor="#272932"
        />
        <SetModeText>{lang.static.colormode}</SetModeText>
      </SetMode>
      <LinksBox>
        {lang.static.menu.map((i) => (
          <ButtonLink key={i.id} onClick={() => {}}>
            {i.title}
          </ButtonLink>
        ))}
      </LinksBox>
    </Container>
  );
}
