import React from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  z-index: 11;
  width: 45vw;
  max-height: 90vh;
  position: absolute;
  display: flex;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.silver};
  border: solid 2px ${({ theme }) => theme.colors.gray};
  border-radius: 7px;
  margin-top: 30px;
`;

const Backdrop = styled.div`
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  z-index: 10;
  display: flex;
  justify-content: center; /*centers items on the line (the x-axis by default)*/
  align-items: flex-start; /*centers items on the cross-axis (y by default)*/
`;

// const Title = styled.h1`

// `;

const Modal = () => (
  <Backdrop>
    <ModalWrapper>
      <p>hello!</p>
    </ModalWrapper>
  </Backdrop>
);

export default Modal;
