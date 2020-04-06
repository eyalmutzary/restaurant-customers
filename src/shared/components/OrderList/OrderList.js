import React from "react";
import styled from "styled-components";
import OrderItem from "./OrderItem";

const OrderListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  width: 25vw;
  height: 80vh;
  border-radius: 7px;
`;

const Title = styled.div`
  font-size: 26px;
  color: ${({ theme }) => theme.colors.darkGray};
  border-bottom: solid 1px ${({ theme }) => theme.colors.silver};
  padding-bottom: 14px;
`;

const TotalPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 26px;
  color: ${({ theme }) => theme.colors.darkGray};
  border-top: solid 1px ${({ theme }) => theme.colors.silver};
  padding-top: 14px;
`;

const Text = styled.div``;

const OrderItemsWrapper = styled.div`
  max-height: 70vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-start;
`;

const OrderList = ({ items, price }) => {
  const isItemsEmpty = !items || items.length === 0;

  return (
    <OrderListWrapper>
      <Title>Order List:</Title>
      <OrderItemsWrapper>
        {!isItemsEmpty ? (
          items.map(({ name, note }) => (
            <OrderItem name={name} note={note}></OrderItem>
          ))
        ) : (
          <Text>List is empty.</Text>
        )}
      </OrderItemsWrapper>
      <TotalPriceWrapper>
        <Text>Total Price:</Text>
        <Text>{!price && "0.00$"}</Text>
      </TotalPriceWrapper>
    </OrderListWrapper>
  );
};

export default OrderList;
