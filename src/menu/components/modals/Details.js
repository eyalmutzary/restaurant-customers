import React, { useMemo } from "react";
import styled from "styled-components";
import { Modal } from "../../../shared/components";

const Description = styled.div`
  padding: 20px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
`;

const Details = ({
  onHide,
  onAddItem,
  selectedCard: { imageUrl, name, description },
}) => {
  const setOfButtons = useMemo(
    () => [
      { text: "Close", onClick: onHide },
      {
        text: "Add",
        onClick: () => {
          onAddItem();
          onHide();
        },
      },
    ],
    [onHide, onAddItem]
  );

  return (
    <Modal image={imageUrl} title={name} onHide={onHide} buttons={setOfButtons}>
      <Description>{description}</Description>
    </Modal>
  );
};

export default Details;
