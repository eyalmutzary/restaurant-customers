import React from "react";
import styled from "styled-components";
import BaseButton from "./Button";
import BaseIcon from "./Icon";

const Backdrop = styled.div`
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100vh;
  width: 100vw;
`;

const ModalWrapper = styled.div`
  position: relative;
  z-index: 11;
  width: 500px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.black};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  font-size: 20px;
`;

const Icon = styled(BaseIcon)`
  position: absolute;
  right: 10px;
  top: 10px;
  padding: 0px 5px 0px 5px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.white};

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black};
    transition: 0.4s;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-bottom: solid 1px ${({ theme }) => theme.colors.gray};
  margin: 10px;
`;

const ContentWrapper = styled.div``;

const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.colors.black};
`;

const BottomText = styled.div`
  flex: 1;
  text-align: center;
  padding: 5px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;

  &:hover {
    background-color: ${({ theme }) => theme.colors.red};
    transition: 0.4s;
  }
`;

const Modal = ({ title, children, onHide, buttons }) => {
  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  return (
    <Backdrop onClick={onHide}>
      <ModalWrapper onClick={handleModalClick}>
        <Icon name="times" onClick={onHide} />
        {title && <TitleWrapper>{title}</TitleWrapper>}
        <ContentWrapper>{children}</ContentWrapper>
        {buttons && (
          <BottomWrapper>
            {buttons.map(({ text, onClick }) => (
              <BottomText onClick={onClick}>{text}</BottomText>
            ))}
          </BottomWrapper>
        )}
      </ModalWrapper>
    </Backdrop>
  );
};

export default Modal;
