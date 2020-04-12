import React, { useContext } from "react";

import { Container, Title } from "./styles";

import { LanguageContext } from "../../utils/LanguageContext";

export default function Skills() {
  const { lang } = useContext(LanguageContext);

  return (
    <Container>
      <Title>{lang.static.titles.skills}</Title>
    </Container>
  );
}
