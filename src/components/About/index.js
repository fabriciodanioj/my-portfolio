import React, { useContext } from "react";

import { Container, Title, Text } from "./styles";

import { LanguageContext } from "../../utils/LanguageContext";

export default function About() {
  const { lang } = useContext(LanguageContext);
  return (
    <Container>
      <Title>{lang.static.titles.about}</Title>
      <Text>{lang.content.about}</Text>
    </Container>
  );
}
