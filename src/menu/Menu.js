import React, { useState, useRef } from "react";
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

const Image = styled.img`
  padding: 0px;
  object-fit: cover;
  width: 100%;
  height: 40vh;
  border-radius: 7px;
`;

const ModalContentWrapper = styled.div`
  padding: 10px;
`;

const ModalTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-bottom: solid 1px ${({ theme }) => theme.colors.gray};
  margin: 10px;
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

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  border-top: solid 1px ${({ theme }) => theme.colors.gray};
  margin: 10px;
`;

const MenuWrapper = styled.div``;

const Menu = () => {
  const [isDetalisModalShown, setIsDetalisModalShown] = useState(false);
  const [isNoteModalShown, setIsNoteModalShown] = useState(false);
  const [isConfirmModalShown, setIsConfirmModalShown] = useState(false);

  const [selectedCardDetails, setSelectedCardDetails] = useState({
    name: "Hamburger",
    description: "description",
    image: "https://dummyimage.com/600x400/000/fff",
  });

  const handleInfoClick = () => {
    setIsDetalisModalShown(true);
    // setSelectedCardDetails()
  };

  return (
    <MenuWrapper>
      {isDetalisModalShown && (
        <Modal onHide={() => setIsDetalisModalShown(false)}>
          <Image src={selectedCardDetails.image} />}
          <ModalContentWrapper>
            <Name>{selectedCardDetails.name}</Name>
            <Description>{selectedCardDetails.description}</Description>
          </ModalContentWrapper>
          <ButtonsWrapper>
            <BaseButton onClick={() => setIsDetalisModalShown(false)}>
              Close
            </BaseButton>
            <Button.Confirm>Add</Button.Confirm>
          </ButtonsWrapper>
        </Modal>
      )}

      {isNoteModalShown && (
        <Modal onHide={() => setIsNoteModalShown(false)}>
          <ModalTitle>
            Add Note
            <Icon name={"times"} onClick={() => setIsNoteModalShown(false)} />
          </ModalTitle>
          <ModalContentWrapper>
            <TextArea />
          </ModalContentWrapper>
          <ButtonsWrapper>
            <BaseButton onClick={() => setIsNoteModalShown(false)}>
              Close
            </BaseButton>
            <Button.Confirm>Add</Button.Confirm>
          </ButtonsWrapper>
        </Modal>
      )}

      {isConfirmModalShown && (
        <Modal onHide={() => setIsConfirmModalShown(false)}>
          <ModalTitle>
            Please Confirm
            <Icon
              name={"times"}
              onClick={() => setIsConfirmModalShown(false)}
            />
          </ModalTitle>
          <ModalContentWrapper>
            <Description>Are you sure?</Description>
          </ModalContentWrapper>
          <ButtonsWrapper>
            <BaseButton onClick={() => setIsConfirmModalShown(false)}>
              Close
            </BaseButton>
            <Button.Confirm>Confirm</Button.Confirm>
          </ButtonsWrapper>
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
              onInfoClicked={({ title, image }) =>
                handleInfoClick(title, image)
              }
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
