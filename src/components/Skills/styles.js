import styled from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.colors.cards};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  margin-top: 70px;
  width: 100%;
  padding: 40px;
  min-height: 500px;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 36px;
`;
