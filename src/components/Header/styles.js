import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.header};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 112px 0 112px;
`;

export const SetMode = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LinksBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ButtonLink = styled.button`
  font-family: "Roboto";
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  color: #ffffff;
  border: none;
  background-color: transparent;

  &:hover {
    cursor: pointer;
  }

  &:not(:last-child) {
    margin-right: 50px;
  }
`;

export const SetModeText = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #ffffff;
  margin-left: 10px;
`;
