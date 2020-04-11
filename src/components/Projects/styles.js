import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
  width: 100%;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 36px;
`;

export const CardsArea = styled.div`
  margin-top: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
`;

export const Card = styled.div`
  flex: 1;
  width: 380px;
  height: 280px;
  background: ${(props) => props.theme.colors.cards};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
`;
