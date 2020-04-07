import styled from "styled-components";
import React from "react";
import BaseIcon from "../Icon";

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 20px;
  margin: 20px 0px 20px 0px;
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 16px;
`;

const Name = styled.div`
  color: ${({ theme }) => theme.colors.darkGray};
`;

const NoteWrapper = styled.div`
  font-size: 14px;
  padding: 5px 10px 0px 15px;
  color: ${({ theme }) => theme.colors.gray};
  display: flex;
`;

const Note = styled.div`
  padding-left: 5px;
`;

const ToolbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TopIcon = styled(BaseIcon)`
  margin-right: 15px;
`;

const NoteIcon = styled(BaseIcon)`
  margin-right: 10px;
`;

const OrderItem = ({ name, note, onAddNote }) => (
  <ItemWrapper>
    <ToolbarWrapper>
      <Name>{name}</Name>
      <IconsWrapper>
        <TopIcon name="edit" onClick={onAddNote}></TopIcon>
        <TopIcon name="times"></TopIcon>
      </IconsWrapper>
    </ToolbarWrapper>
    {note && (
      <NoteWrapper>
        <NoteIcon name="star-of-life"></NoteIcon>
        <Note>{note}</Note>
      </NoteWrapper>
    )}
  </ItemWrapper>
);

export default OrderItem;
