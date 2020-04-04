import React from "react";
import styled from "styled-components";
import { Button, Card, Icon, Sidebar, Modal } from "../shared/components";
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
    <Sidebar></Sidebar>
    {/* <Modal></Modal> */}
    <Card
      image="https://dummyimage.com/180X180/000/fff"
      title="Product Title"
    />
    <Icon size={"large"}></Icon>
    <Button>Yes</Button>
    <Button disabled={true}>Yes</Button>
    <Button.Confirm>Confirm</Button.Confirm>
    <Button.Confirm disabled={true}>Confirm</Button.Confirm>
    <Button.Warning>Warning</Button.Warning>
    <Button.Warning disabled={true}>Warning</Button.Warning>
  </Screen>
);

export default Main;
