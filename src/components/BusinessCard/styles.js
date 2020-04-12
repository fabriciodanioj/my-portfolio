import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.cards};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  color: #272932;
  padding: 20px 50px 20px 50px;
  margin-top: 70px;
`;

export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-right: 50px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const Name = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  display: flex;
  align-items: center;
`;
export const Email = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
`;
export const Phone = styled(Name)`
  margin-top: 20px;
`;

export const SocialMediaIcons = styled.div`
  margin-top: 20px;
`;

export const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 50px;
`;

export const IconLink = styled.a``;
