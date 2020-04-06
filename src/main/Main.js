import React from "react";
import styled from "styled-components";
import {
  Button,
  Card,
  Icon,
  Sidebar,
  Modal,
  OrderList,
} from "../shared/components";
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
    {/* <Sidebar></Sidebar> */}
    <OrderList items={[{ name: "Ahi", note: "kk" }]}></OrderList>
    {/* <Modal
      image="https://dummyimage.com/1000X2000/000/fff"
      name="Hamburger"
      description="amazing burger with extra cheese"
      // title="Add Note"
      // textArea="true"
      isConfirm="Add"
    ></Modal> */}
    {/* <Card
      image="https://dummyimage.com/180X180/000/fff"
      title="Product Title"
    />
    <Icon size={"large"}></Icon>
    <Button>Yes</Button>
    <Button disabled={true}>Yes</Button>
    <Button.Confirm>Confirm</Button.Confirm>
    <Button.Confirm disabled={true}>Confirm</Button.Confirm>
    <Button.Warning>Warning</Button.Warning>
    <Button.Warning disabled={true}>Warning</Button.Warning> */}
  </Screen>
);

export default Main;
