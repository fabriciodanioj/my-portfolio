import React from "react";

import {
  Container,
  Avatar,
  Name,
  InfoContainer,
  Phone,
  Email,
  SocialMediaIcons,
  Icon,
  IconLink,
} from "./styles";

import githubLogo from "../../assets/github.png";
import gmailLogo from "../../assets/gmail.png";
import linkedinLogo from "../../assets/linkedin.png";
import whatsappLogo from "../../assets/whatsapp.png";

export default function BusinessCard() {
  return (
    <Container>
      <Avatar src="https://storage.googleapis.com/shawee-production.appspot.com/shawee/profilepictures/9840ea96-1794-40ea-b62f-2005b4fa74de.jpg" />
      <InfoContainer>
        <Name>Fabrício Dani de Oliveira Júnior</Name>
        <Email>fabriciodanioj@gmail.com</Email>
        <Phone>+55 38 9 9983-6156</Phone>
        <SocialMediaIcons>
          <IconLink href="http://github.com/fabriciodanioj" target="blank">
            <Icon src={githubLogo} />
          </IconLink>
          <IconLink
            href="https://www.linkedin.com/in/fabricio-dani-373469176/"
            target="blank"
          >
            <Icon src={linkedinLogo} />
          </IconLink>
          <IconLink href="mailto:fabriciodanioj@gmail.com" target="blank">
            <Icon src={gmailLogo} />
          </IconLink>
          <IconLink
            href="https://api.whatsapp.com/send?phone=5538999836156"
            target="blank"
          >
            <Icon src={whatsappLogo} />
          </IconLink>
        </SocialMediaIcons>
      </InfoContainer>
    </Container>
  );
}
