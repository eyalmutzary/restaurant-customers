import React from "react";
import styled from "styled-components";
import {
  Button as BaseButton,
  Card,
  Icon,
  Sidebar,
  Modal,
  OrderList,
} from "../shared/components";

const Screen = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.silver};
  max-height: 100vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
`;

const Title = styled.div`
  font-size: 36px;
  color: ${({ theme }) => theme.colors.darkGray};
  font-weight: bold;
  margin: 10px;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: auto;
`;

const ListWrapper = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
`;

const Button = styled(BaseButton.Warning)`
  width: 100%;
  margin-top: 10px;
  height: 15%;
  font-size: 30px;
  border-radius: 7px;
  justify-content: space-evenly;
`;

const Menu = () => (
  <Screen>
    <Sidebar></Sidebar>
    <ContentWrapper>
      <Title>Hamburgers</Title>
      <CardsWrapper>
        <Card
          title={"Hamburger"}
          image={"https://dummyimage.com/600x400/000/fff"}
        ></Card>
        <Card
          title={"Hamburger"}
          image={"https://dummyimage.com/600x400/000/fff"}
        ></Card>
        <Card
          title={"Hamburger"}
          image={"https://dummyimage.com/600x400/000/fff"}
        ></Card>
        <Card
          title={"Hamburger"}
          image={"https://dummyimage.com/600x400/000/fff"}
        ></Card>
        <Card
          title={"Hamburger"}
          image={"https://dummyimage.com/600x400/000/fff"}
        ></Card>
        <Card
          title={"Hamburger"}
          image={"https://dummyimage.com/600x400/000/fff"}
        ></Card>
        <Card
          title={"Hamburger"}
          image={"https://dummyimage.com/600x400/000/fff"}
        ></Card>
      </CardsWrapper>
    </ContentWrapper>
    <ListWrapper>
      <OrderList items={[{ name: "Ahi", note: "kk" }]}></OrderList>
      <Button>
        Take an Order <Icon name={"angle-double-right"} />
      </Button>
    </ListWrapper>
  </Screen>
);

export default Menu;
