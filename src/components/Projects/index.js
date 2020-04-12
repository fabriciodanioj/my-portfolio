import React, { useContext } from "react";

import { Container, Title, Card, CardsArea } from "./styles";
import { LanguageContext } from "../../utils/LanguageContext";

export default function Projects() {
  const { lang } = useContext(LanguageContext);

  return (
    <Container>
      <Title>{lang.static.titles.projects}</Title>
      <CardsArea>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardsArea>
    </Container>
  );
}
