import React, { useContext } from "react";

import Switch from "react-switch";

import { ThemeContext } from "../../utils/ThemeContext";

import {
  Container,
  ButtonLink,
  LinksBox,
  SetMode,
  SetModeText,
} from "./styles";

export default function Header() {
  const { toogleTheme, theme } = useContext(ThemeContext);

  return (
    <Container>
      <SetMode>
        <Switch
          onChange={toogleTheme}
          checked={theme.title === "dark"}
          offColor="#A8F9FF"
          onColor="#272932"
        />
        <SetModeText>Modo Noturno</SetModeText>
      </SetMode>
      <LinksBox>
        <ButtonLink>Sobre Mim</ButtonLink>
        <ButtonLink>Habilidades</ButtonLink>
        <ButtonLink>Projetos</ButtonLink>
        <ButtonLink>Contato</ButtonLink>
      </LinksBox>
    </Container>
  );
}
