import React from "react";
import styled from "styled-components";
import { backgroundImage } from "../shared/assets/images";
import {
  Button as BaseButton,
  Screen as BaseScreen,
} from "../shared/components";

const Screen = styled(BaseScreen)`
  flex-direction: column;
  align-items: flex-end;
  background-image: url(${backgroundImage});
  background-size: cover;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  margin: 20px;
`;

const Title = styled.div`
  font-size: 50px;
`;

const Subtitle = styled.div`
  font-size: 14px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px;
  flex: 1;
`;

const BorderedButton = styled(BaseButton.Main)`
  margin: 10px;
  width: 180px;
  height: 55px;
`;

const Main = ({ history }) => (
  <Screen>
    <ButtonWrapper>
      <BorderedButton onClick={() => history.push("/menu")}>
        Menu
      </BorderedButton>
      <BorderedButton>My Table</BorderedButton>
      <BorderedButton>Call a Waiter</BorderedButton>
      <BorderedButton>Check, Please</BorderedButton>
    </ButtonWrapper>
    <LogoWrapper>
      <Title>Well-Served</Title>
      <Subtitle>Probably the best serving app in the world.</Subtitle>
    </LogoWrapper>
  </Screen>
);

export default Main;
