import React, { useState, useContext, useCallback, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { backgroundImage } from "../shared/assets/images";
import { AuthTableNumContext } from "../app";
import { AuthModal, ErrorModal } from "./components";
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
  padding: 0px 10px 0px 10px;
`;

const modalTypes = { AUTH: "AUTH", ERROR: "ERROR" };

const Main = ({ history }) => {
  const [authTableNum, setAuthTableNum] = useContext(AuthTableNumContext);
  const [whichModalShown, setWhichModalShown] = useState();
  const [isTableAvailable, setIsTableAvailable] = useState(false);

  const checkTableAvailable = useCallback(async () => {
    try {
      const res = await axios.get("/customerTables?tableNum=" + authTableNum);
      if (res.data.CustomerTableStatus.status === "closed") {
        setIsTableAvailable(true);
      } else {
        console.log("Table closed");
      }
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }, [authTableNum]);

  useEffect(() => {
    checkTableAvailable();
  }, [checkTableAvailable]);

  return (
    <Screen>
      {whichModalShown === modalTypes.AUTH && (
        <AuthModal onHide={() => setWhichModalShown(null)} />
      )}

      {whichModalShown === modalTypes.ERROR && (
        <ErrorModal
          description="Your table is not open. Please call the waiter."
          onHide={() => setWhichModalShown(null)}
        />
      )}

      <ButtonWrapper>
        <BorderedButton
          disabled={!isTableAvailable}
          onClick={() =>
            isTableAvailable
              ? history.push("/menu")
              : setWhichModalShown(modalTypes.ERROR)
          }
        >
          Menu
        </BorderedButton>
        <BorderedButton disabled={!isTableAvailable}>My Table</BorderedButton>
        <BorderedButton disabled={!isTableAvailable}>
          Call a Waiter
        </BorderedButton>
        <BorderedButton disabled={!isTableAvailable}>
          Check, Please
        </BorderedButton>
      </ButtonWrapper>
      <LogoWrapper>
        <Title>Well-Served</Title>
        <Subtitle>Probably the best serving app in the world.</Subtitle>
      </LogoWrapper>
      <AuthWrapper>
        <AuthText>Table Number: {authTableNum}</AuthText>
        <Icon
          name="sign-out-alt"
          onClick={() => setWhichModalShown(modalTypes.AUTH)}
        />
      </AuthWrapper>
    </Screen>
  );
};

export default Main;
