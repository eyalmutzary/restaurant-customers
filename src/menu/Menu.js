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
  const [isDetalisModalShown, setIsDetalisModalShown] = useState(false);
  const [isNoteModalShown, setIsNoteModalShown] = useState(false);
  const [isConfirmModalShown, setIsConfirmModalShown] = useState(false);
  const [selectedCardDetails, setSelectedCardDetails] = useState();

  const addCloseModalButtons = useMemo(
    () => [
      { text: "Close", onClick: () => setIsDetalisModalShown(false) },
      { text: "Add", type: "Confirm" },
    ],
    []
  );

  const confirmModalButtons = useMemo(
    () => [
      { text: "Close", onClick: () => setIsDetalisModalShown(false) },
      { text: "Confirm", type: "Confirm" },
    ],
    []
  );

  const onModalHide = useCallback((modalType) => {
    switch (modalType) {
      case "details":
        setIsDetalisModalShown(false, []);
        break;
      case "note":
        setIsNoteModalShown(false, []);
        break;
      case "confirm":
        setIsConfirmModalShown(false, []);
        break;
      default:
        break;
    }
  });

  const handleInfoClick = (cardInfo) => {
    setIsDetalisModalShown(true);
    console.log(cardInfo);
    setSelectedCardDetails(cardInfo);
  };

  return (
    <MenuWrapper>
      {isDetalisModalShown && (
        <Modal
          title={selectedCardDetails.title}
          image={selectedCardDetails.image}
          onHide={() => onModalHide("details")}
          buttons={addCloseModalButtons}
        >
          <Description>{selectedCardDetails.description}</Description>
        </Modal>
      )}

      {isNoteModalShown && (
        <Modal
          title="Add Note"
          onHide={() => onModalHide("note")}
          buttons={confirmModalButtons}
        >
          <TextArea />
        </Modal>
      )}

      {isConfirmModalShown && (
        <Modal
          title="Confirm"
          onHide={() => onModalHide("confirm")}
          buttons={confirmModalButtons}
        >
          <Description>Are you sure?</Description>
        </Modal>
      )}
      <Screen>
        <Sidebar />
        <ContentWrapper>
          <Title>Hamburgers</Title>
          <CardsWrapper>
            {foodCards.map(({ uuid, ...cardProps }) => (
              <Card
                key={uuid}
                onInfoClicked={handleInfoClick}
                {...cardProps}
              ></Card>
            ))}
          </CardsWrapper>
        </ContentWrapper>
        <ListWrapper>
          <OrderList
            items={[{ name: "Ahi", note: "kk" }]}
            onAddNote={() => setIsNoteModalShown(true)}
          ></OrderList>
          <Button onClick={() => setIsConfirmModalShown(true)}>
            Take an Order <Icon name={"angle-double-right"} />
          </Button>
        </ListWrapper>
      </Screen>
    </MenuWrapper>
  );
};

export default Menu;
