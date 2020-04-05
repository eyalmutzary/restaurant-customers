import React from "react";
import styled from "styled-components";
import BaseIcon from "./Icon";
import BaseButton from "./Button";
import ItemsList from "./ItemsList";


const Backdrop = styled.div`
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  z-index: 10;
  display: flex;
  justify-content: center; /*centers items on the line (the x-axis by default)*/
  align-items: flex-start; /*centers items on the cross-axis (y by default)*/
`;

const ModalWrapper = styled.div`
  z-index: 11;
  width: 45vw;
  max-height: 90vh;
  background-color: ${({ theme }) => theme.colors.silver};
  border-radius: 7px;
  margin-top: 30px;
  color: ${({ theme }) => theme.colors.darkGray};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  font-size: 20px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-bottom: solid 1px ${({ theme }) => theme.colors.gray};
  margin: 10px;
`;

const Icon = styled(BaseIcon)`
  &:hover {
    color: ${({ theme }) => theme.colors.black};
    transition: 0.4s;
    cursor: pointer;
  }
`;

const Image = styled.img`
  padding: 0px;
  object-fit: cover;
  width: 100%;
  height: 40vh;
  border-radius: 7px;
`;

const ContentWrapper = styled.div`
  padding: 10px;
`;

const Name = styled.h4`
  margin: 10px;
`;

const Description = styled.p`
  margin: 10px;
  font-size: 16px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  border-top: solid 1px ${({ theme }) => theme.colors.gray};
  margin: 10px;
`;

const Button = styled(BaseButton)`
  margin-right: 10px;
`;

const TextArea = styled.textarea`
  height: 15vh;
  margin: 10px 20px 10px 20px;
  width: 90%;
`;

const Modal = ({ title, image, name, description, textArea, withConfirm, items }) => (
  <Backdrop>
    <ModalWrapper>
      {title && (
        <Title>
          {title}
          <Icon name={"times"} />
        </Title>
      )}
      {image && <Image src={image} />}
      <ContentWrapper>
        {name && <Name>{name}</Name>}
        {description && <Description>{description}</Description>}
        {textArea && <TextArea />}
        {items && <ItemsList items={items}/>}
      </ContentWrapper>
      <ButtonsWrapper>
        <Button>Close</Button>
        {withConfirm && <Button.Confirm>{withConfirm}</Button.Confirm>}
      </ButtonsWrapper>
    </ModalWrapper>
  </Backdrop>
);

export default Modal;
