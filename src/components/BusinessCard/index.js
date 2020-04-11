import React from "react";

import { Container, Avatar, Name, InfoContainer, Phone, Email } from "./styles";

export default function BusinessCard() {
  return (
    <Container>
      <Avatar src="https://storage.googleapis.com/shawee-production.appspot.com/shawee/profilepictures/9840ea96-1794-40ea-b62f-2005b4fa74de.jpg" />
      <InfoContainer>
        <Name>Fabrício Dani de Oliveira Júnior</Name>
        <Email>fabriciodanioj@gmail.com</Email>
        <Phone>+55 38 9 9983-6156</Phone>
      </InfoContainer>
    </Container>
  );
}
