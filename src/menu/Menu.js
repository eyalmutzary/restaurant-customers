import React, { useState, useMemo, useCallback } from "react";
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

const Menu = () => {
  const [whichModalShown, setWhichModalShown] = useState(null);
  const [selectedCardDetails, setSelectedCardDetails] = useState();

  const modalButtons = useMemo(
    () => [
      { text: "Close", onClick: () => setWhichModalShown(null) },
      { text: "Confirm", type: "Confirm" },
    ],
    []
  );

  const handleCardInfoClick = (cardInfo) => {
    setWhichModalShown("details");
    setSelectedCardDetails(cardInfo);
  };

  return (
    <MenuWrapper>
      {whichModalShown === "details" ? (
        <Modal
          title={selectedCardDetails.title}
          image={selectedCardDetails.image}
          onHide={() => setWhichModalShown(null)}
          buttons={modalButtons}
        >
          <Description>{selectedCardDetails.description}</Description>
        </Modal>
      ) : null}

      {whichModalShown === "note" ? (
        <Modal
          title="Add Note"
          onHide={() => setWhichModalShown(null)}
          buttons={modalButtons}
        >
          <TextArea />
        </Modal>
      ) : null}

      {whichModalShown === "confirm" ? (
        <Modal
          title="Confirm"
          onHide={() => setWhichModalShown(null)}
          buttons={modalButtons}
        >
          <Description>Are you sure?</Description>
        </Modal>
      ) : null}

      <Screen>
        <Sidebar />
        <ContentWrapper>
          <Title>Hamburgers</Title>
          <CardsWrapper>
            {foodCards.map(({ uuid, ...cardProps }) => (
              <Card
                key={uuid}
                onInfoClicked={handleCardInfoClick}
                {...cardProps}
              ></Card>
            ))}
          </CardsWrapper>
        </ContentWrapper>
        <ListWrapper>
          <OrderList
            items={[{ name: "Ahi", note: "kk" }]}
            onAddNote={() => setWhichModalShown("note")}
          ></OrderList>
          <Button onClick={() => setWhichModalShown("confirm")}>
            Take an Order <Icon name={"angle-double-right"} />
          </Button>
        </ListWrapper>
      </Screen>
    </MenuWrapper>
  );
};

export default Menu;
