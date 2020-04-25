import React, { useState, useContext } from "react";
import styled from "styled-components";
import { backgroundImage } from "../shared/assets/images";
import { AuthTableNumContext } from "../app";
import { AuthModal } from "./components";
import {
  Button as BaseButton,
  Screen as BaseScreen,
  Icon,
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

const AuthWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  left: 10px;
  bottom: 10px;
  color: ${({ theme }) => theme.colors.white};
`;

const AuthText = styled.div`
  /* display: flex; */
  padding: 0px 10px 0px 10px;
`;

const Main = ({ history }) => {
  const [authTableNum, setAuthTableNum] = useContext(AuthTableNumContext);
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <Screen>
      {showAuthModal && <AuthModal onHide={() => setShowAuthModal(false)} />}

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
      <AuthWrapper>
        <AuthText>Table Number: {authTableNum}</AuthText>
        <Icon name="sign-out-alt" onClick={() => setShowAuthModal(true)} />
      </AuthWrapper>
    </Screen>
  );
};

export default Main;
