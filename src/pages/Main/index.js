import React from "react";

import Header from "../../components/Header";
import BusinessCard from "../../components/BusinessCard";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";

import { Container, Content } from "./styles";

export default function Main() {
  return (
    <Container>
      <Header />
      <Content>
        <BusinessCard />
        <About />
        <Skills />
        <Projects />
      </Content>
    </Container>
  );
}
