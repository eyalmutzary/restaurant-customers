import React from "react";
import styled from "styled-components";
import { Modal, Icon as BaseIcon } from "../../../shared/components";

const Description = styled.div`
  padding: 20px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
`;

const Icon = styled(BaseIcon)`
  color: ${({ theme }) => theme.colors.darkGreen};
  font-size: 80px;
  font-weight: lighter;
  text-align: center;
`;

const Success = ({ onHide, description }) => {
  return (
    <Modal title="Order is on the Way!" onHide={onHide}>
      <Icon name="check" />
      <Description>{description}</Description>
    </Modal>
  );
};

export default Success;
