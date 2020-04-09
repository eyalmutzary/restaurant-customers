import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { Modal } from "../../../shared/components";

const TextArea = styled.textarea`
  height: 15vh;
  margin: 30px 20px 30px 20px;
  width: 90%;
`;

const Note = ({ onHide, onConfirm }) => {
  const [note, setNote] = useState();

  const differentSetOfButtons = useMemo(
    () => [
      { text: "Close", onClick: onHide },
      {
        text: "Confirm",
        onClick: () => onConfirm(note),
      },
    ],
    [note, onConfirm, onHide]
  );

  return (
    <Modal title="Add Note" onHide={onHide} buttons={differentSetOfButtons}>
      <TextArea onChange={({ target: { value } }) => setNote(value)} />
    </Modal>
  );
};

export default Note;
