import React, { useState, useMemo, useCallback, useEffect } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

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

const Description = styled.p`
  padding: 20px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
`;

const TextArea = styled.textarea`
  height: 15vh;
  margin: 30px 20px 30px 20px;
  width: 90%;
`;

const MenuWrapper = styled.div``;

const modalTypes = { DETAILS: "DETAILS", CONFIRM: "CONFIRM", NOTE: "NOTE" };

const Menu = () => {
  const [whichModalShown, setWhichModalShown] = useState();
  const [selectedCardDetails, setSelectedCardDetails] = useState();
  const [orderListItems, setOrderListItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    calcOrderSum();
  }, [orderListItems]);

  const modalButtons = useMemo(
    () => [
      { text: "Close", onClick: () => setWhichModalShown() },
      { text: "Confirm", type: "Confirm" },
    ],
    []
  );

  const handleCardInfoClick = useCallback((cardInfo) => {
    setWhichModalShown(modalTypes.DETAILS);
    setSelectedCardDetails(cardInfo);
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

  const calcOrderSum = useCallback(() => {
    let sum = 0;
    orderListItems.map((item) => {
      sum += Number(item.price);
    });
    setTotalPrice(sum);
  }, [orderListItems]);

  return (
    <MenuWrapper>
      {whichModalShown === modalTypes.DETAILS && (
        <Modal
          title={selectedCardDetails.title}
          image={selectedCardDetails.image}
          onHide={() => setWhichModalShown(null)}
          buttons={modalButtons}
        >
          <Description>{selectedCardDetails.description}</Description>
        </Modal>
      )}

      {whichModalShown === modalTypes.NOTE && (
        <Modal
          title="Add Note"
          onHide={() => setWhichModalShown(null)}
          buttons={modalButtons}
        >
          <TextArea />
        </Modal>
      )}

      {whichModalShown === modalTypes.CONFIRM && (
        <Modal
          title="Confirm"
          onHide={() => setWhichModalShown(null)}
          buttons={modalButtons}
        >
          <Description>Are you sure?</Description>
        </Modal>
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
              ></Card>
            ))}
          </CardsWrapper>
        </ContentWrapper>
        <ListWrapper>
          <OrderList
            items={orderListItems}
            price={totalPrice}
            onAddNote={(itemId) => setWhichModalShown(modalTypes.NOTE)}
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
