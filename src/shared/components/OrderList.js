import styled from "styled-components";
import React from "react";
import ListItem from "./ListItem";

const OrderListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  width: 30vw;
  height: 80vh;
  border-radius: 7px;
`;

const ListWrapper = styled.div``;

const TotalPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 26px;
  color: ${({ theme }) => theme.colors.darkGray};
  border-top: solid 1px ${({ theme }) => theme.colors.silver};
  padding-top: 14px;
`;

const TotalText = styled.span``;
const TotalPrice = styled.span``;

const OrderList = ({ items, price }) => (
  <OrderListWrapper>
    <ListWrapper>
      {items.map((item, index) => (
        <ListItem key={index} name={item.name} note={item.note} />
      ))}
    </ListWrapper>
    <TotalPriceWrapper>
      <TotalText>Total Price:</TotalText>
      <TotalPrice>{price}</TotalPrice>
    </TotalPriceWrapper>
  </OrderListWrapper>
);

export default OrderList;
