import styled from "styled-components";
import React from "react";
import Button from "./Button";
import Icon from "./Icon";

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 20px;
  margin: 20px 0px 20px 0px;
`;

const ButtonsWrapper = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 16px;
`;

ButtonsWrapper.Icon = styled(Icon)`
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.darkGray};
    transition: 0.4s;
  }
`;

const Name = styled.span`
  color: ${({ theme }) => theme.colors.darkGray};
  width: 75%;
`;

const NoteWrapper = styled.div`
  font-size: 14px;
  padding: 5px 10px 0px 15px;
  color: ${({ theme }) => theme.colors.gray};
  display: inline;
`;

const Note = styled.span`
  padding-left: 5px;
`;

const ListItem = ({ name, note }) => (
  <ItemWrapper>
    <Name>{name}</Name>
    <ButtonsWrapper>
      <ButtonsWrapper.Icon name="edit"></ButtonsWrapper.Icon>
      <ButtonsWrapper.Icon name="times"></ButtonsWrapper.Icon>
    </ButtonsWrapper>
    {note && (
      <NoteWrapper>
        <Icon name="star-of-life"></Icon>
        <Note>{note}</Note>
      </NoteWrapper>
    )}
  </ItemWrapper>
);

export default ListItem;
