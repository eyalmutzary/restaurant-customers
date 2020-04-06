import React, { useState } from "react";
import styled from "styled-components";
import {
  Button as BaseButton,
  Card,
  Icon,
  Sidebar,
  Modal,
  OrderList,
  Screen,
} from "../shared/components";

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
`;

const Button = styled(BaseButton.Warning)`
  margin-top: 10px;
  flex: 1;
  font-size: 30px;
  border-radius: 7px;
  justify-content: space-evenly;
`;
const MenuWrapper = styled.div``;

const Menu = () => {
  const [isDetalisModalShown, setIsDetalisModalShown] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  console.log(isDetalisModalShown);
  return (
    <MenuWrapper>
      {isDetalisModalShown && (
        <Modal onHide={() => setIsDetalisModalShown(false)}>
          <Icon name={"times"} />
        </Modal>
      )}

      <Screen>
        <Sidebar />
        <ContentWrapper>
          <Title>Hamburgers</Title>
          <CardsWrapper>
            <Card
              title={"xxx"}
              image={"https://dummyimage.com/600x400/000/fff"}
              onInfoClicked={() => setIsDetalisModalShown(true)}
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
    </MenuWrapper>
  );
};

export default Menu;
