import React, { useMemo } from "react";
import styled from "styled-components";
import { Modal } from "../../../shared/components";

const Description = styled.div`
  padding: 20px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
`;

const Details = ({ onHide, selectedCard: { image, title, description } }) => {
  const differentSetOfButtons = useMemo(
    () => [
      { text: "Close", onClick: onHide },
      {
        text: "Confirm",
        onClick: onHide,
      },
    ],
    [onHide]
  );

  return (
    <Modal
      image={image}
      title={title}
      onHide={onHide}
      buttons={differentSetOfButtons}
    >
      <Description>{description}</Description>
    </Modal>
  );
};

export default Details;
