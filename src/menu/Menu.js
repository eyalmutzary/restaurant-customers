import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import {
  Note as NoteModal,
  Details as DetailsModal,
} from "./components/modals";

import {
  Button as BaseButton,
  Card,
  Icon,
  Sidebar,
  Modal,
  OrderList,
  Screen,
} from "../shared/components";
import { foodCards } from "../shared/constants";
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

const modalTypes = { DETAILS: "DETAILS", CONFIRM: "CONFIRM", NOTE: "NOTE" };

const Menu = () => {
  const [whichModalShown, setWhichModalShown] = useState();
  const [selectedCard, setSelectedCard] = useState();
  const [selectedOrderItemId, setSelectedOrderItemId] = useState();
  const [orderListItems, setOrderListItems] = useState([]);

  const handleCardInfoClick = useCallback((cardInfo) => {
    setWhichModalShown(modalTypes.DETAILS);
    setSelectedCard(cardInfo);
  }, []);

  const handleAddItemClick = useCallback(
    (itemInfo) => {
      const listItemId = uuidv4();
      setOrderListItems([
        ...orderListItems,
        {
          productId: itemInfo.productId,
          listItemId: listItemId,
          title: itemInfo.title,
          price: itemInfo.price,
          note: "",
        },
      ]);
    },
    [orderListItems]
  );

  const handleRemoveItem = useCallback(
    (listItemId) => {
      const removeItem = orderListItems.filter(
        (listItem) => listItem.listItemId !== listItemId
      );
      setOrderListItems(removeItem);
    },
    [orderListItems]
  );

  return (
    <MenuWrapper>
      {whichModalShown === modalTypes.DETAILS && (
        <DetailsModal
          selectedCard={selectedCard}
          onHide={() => setWhichModalShown(null)}
        />
      )}

      {whichModalShown === modalTypes.NOTE && (
        <NoteModal
          title="Add Note"
          onHide={() => setWhichModalShown(null)}
          onConfirm={(noteInfo) => {
            setWhichModalShown(null);
            console.log(noteInfo);
            console.log(selectedOrderItemId);
            setSelectedOrderItemId(null);
          }}
        />
      )}

      {whichModalShown === modalTypes.CONFIRM && (
        <Modal onHide={() => setWhichModalShown(null)} />
      )}

      <Screen>
        <Sidebar />
        <ContentWrapper>
          <Title>Hamburgers</Title>
          <CardsWrapper>
            {foodCards.map(({ productId, ...cardProps }) => (
              <Card
                key={productId}
                onInfoClicked={handleCardInfoClick}
                onAddClicked={handleAddItemClick}
                {...cardProps}
              />
            ))}
          </CardsWrapper>
        </ContentWrapper>
        <ListWrapper>
          <OrderList
            items={orderListItems}
            onAddNote={(listItemId) => {
              setWhichModalShown(modalTypes.NOTE);
              setSelectedOrderItemId(listItemId);
            }}
            onRemoveItem={(listItemId) => handleRemoveItem(listItemId)}
          ></OrderList>
          <Button onClick={() => setWhichModalShown(modalTypes.CONFIRM)}>
            Take an Order <Icon name={"angle-double-right"} />
          </Button>
        </ListWrapper>
      </Screen>
    </MenuWrapper>
  );
};

export default Menu;
