import React, { useCallback, useState, useContext, useEffect } from "react";
import styled from "styled-components";
import {
  Modal,
  OrderList,
  ItemsList,
  LoadingSpinner,
} from "../../../shared/components";
import axios from "axios";
import { AuthTableNumContext } from "../../../app";
import { sumBy } from "lodash";

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 60px;
  flex-direction: column;
  flex: 1;
`;

const OrderWrapper = styled.div``;

const TotalPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 26px;
  color: ${({ theme }) => theme.colors.darkGray};
  border-top: solid 1px ${({ theme }) => theme.colors.silver};
  padding-top: 14px;
`;

const Text = styled.div`
  font-size: 18px;
  padding: 15px 10px 15px 10px;
`;

const TableDetails = ({ onHide, description }) => {
  const [authTableNum, setAuthTableNum] = useContext(AuthTableNumContext);
  const [orderedItems, setOrderedItems] = useState([]);
  const [orderSum, setOrderSum] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const fetchOrderItems = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(
        "/customerTables/products?tableNum=" + authTableNum
      );
      let items = [];
      res.data.forEach((order) => {
        order.OrderedProducts.forEach((orderedProduct) =>
          items.push(orderedProduct)
        );
      });
      console.log(items);
      setOrderSum(sumBy(items, "Product.price"), [items]);
      setOrderedItems(items);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [authTableNum]);

  useEffect(() => {
    fetchOrderItems();
  }, [fetchOrderItems]);

  return (
    <Modal title="My Table" onHide={onHide}>
      <ContentWrapper>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <OrderWrapper>
            {orderedItems.length > 0 ? (
              <ItemsList items={orderedItems} editMode={false} />
            ) : (
              <Text>Table Empty</Text>
            )}
            <TotalPriceWrapper>
              <Text>Total Price:</Text>
              <Text>{orderSum}$</Text>
            </TotalPriceWrapper>
          </OrderWrapper>
        )}
      </ContentWrapper>

      {/* <OrderList items={orderedItems} editMode={false} /> */}
    </Modal>
  );
};

export default TableDetails;
