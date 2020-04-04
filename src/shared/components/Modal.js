import React from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  z-index: 11;
  width: 35vw;
  max-height: 90vh;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: ${({ theme }) => theme.colors.silver};
  border: solid 2px ${({ theme }) => theme.colors.darkGray};
  border-radius: 10px;
  margin-top: 30px;
`;

const Backdrop = styled.div`
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  z-index: 10;
`;

const Modal = () => (
  <Backdrop>
    <ModalWrapper>
      <p>Hello!</p>
    </ModalWrapper>
  </Backdrop>
);

export default Modal;
