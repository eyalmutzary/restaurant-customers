import React from "react";
import styled from "styled-components";
import { Button } from "../shared/components";

const Screen = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Main = () => (
  <Screen>
    <Button>Yes</Button>
    <Button disabled={true}>Yes</Button>
    <Button.Primary>Yes</Button.Primary>
    <Button.Primary disabled={true}>Yes</Button.Primary>
  </Screen>
);

export default Main;
