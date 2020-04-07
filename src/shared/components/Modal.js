import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Backdrop = styled.div`
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /*centers items on the line (the x-axis by default)*/
  position: absolute;
  height: 100vh;
  width: 100vw;
`;

const ModalWrapper = styled.div`
  z-index: 11;
  width: 45vw;
  background-color: ${({ theme }) => theme.colors.silver};
  border-radius: 7px;
  margin-top: 30px;
  color: ${({ theme }) => theme.colors.darkGray};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  font-size: 20px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-bottom: solid 1px ${({ theme }) => theme.colors.gray};
  margin: 10px;
`;

const ContentWrapper = styled.div`
  padding: 10px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  border-top: solid 1px ${({ theme }) => theme.colors.gray};
  margin: 10px;
`;

const Modal = ({ title, children, onHide, buttons }) => {
  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  return (
    <Backdrop onClick={onHide}>
      <ModalWrapper onClick={handleModalClick}>
        {title && <TitleWrapper>{title}</TitleWrapper>}
        <ContentWrapper>{children}</ContentWrapper>
        {buttons && (
          <ButtonsWrapper>
            {buttons.map(({ text, onClick }) => (
              <Button onClick={onClick}>{text}</Button>
            ))}
          </ButtonsWrapper>
        )}
      </ModalWrapper>
    </Backdrop>
  );
};

export default Modal;
