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

const Image = styled.img`
  padding: 0px;
  object-fit: cover;
  width: 100%;
  height: 40vh;
  border-radius: 7px;
`;

const Name = styled.h4`
  margin: 10px;
`;

const Description = styled.p`
  margin: 10px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  height: 15vh;
  margin: 10px 20px 10px 20px;
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

  const onModalHide = useCallback(() => setIsDetalisModalShown(false), []);

  const handleInfoClick = (cardInfo) => {
    setIsDetalisModalShown(true);
    setSelectedCardDetails(cardInfo);
  };

  return (
    <MenuWrapper>
      {isDetalisModalShown && (
        <Modal onHide={onModalHide} buttons={addCloseModalButtons}>
          <Image src={selectedCardDetails.image} />}
          <Name>{selectedCardDetails.title}</Name>
          <Description>{selectedCardDetails.description}</Description>
        </Modal>
      )}

      {isNoteModalShown && (
        <Modal
          title="Add Note"
          onHide={onModalHide}
          buttons={confirmModalButtons}
        >
          <TextArea />
        </Modal>
      )}

      {isConfirmModalShown && (
        <Modal
          title="Confirm"
          onHide={onModalHide}
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
              <Card key={uuid} {...cardProps}></Card>
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
