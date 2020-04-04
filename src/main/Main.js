import React from "react";
import styled from "styled-components";
import { Button, Card, Icon } from "../shared/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Screen = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Main = () => (
  <Screen>
    <Card
      type="withImage"
      src="https://dummyimage.com/180X180/000/fff"
      title="Product Title"
    />
    <Icon size={"large"}></Icon>
    <Button>Yes</Button>
    <Button disabled={true}>Yes</Button>
    <Button.Primary>Yes</Button.Primary>
    <Button.Primary disabled={true}>Yes</Button.Primary>
  </Screen>
);

export default Main;
