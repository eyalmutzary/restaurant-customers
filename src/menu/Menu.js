import React, {
  useState,
  useCallback,
  useEffect,
  useMemo,
  useContext,
} from "react";
import styled from "styled-components";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { AuthTableNumContext } from "../app";
import { Details as DetailsModal } from "./components/modals";
import {
  Button as BaseButton,
  Card,
  Icon,
  Sidebar,
  OrderList,
  Screen,
  LoadingSpinner,
  Confirm as ConfirmModal,
  Success as SuccessModal,
  Note as NoteModal,
} from "../shared/components";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
`;

const Title = styled.div`
  font-size: 36px;
  color: ${({ theme }) => theme.colors.darkGray};
  font-weight: bold;
  margin: 10px;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow: auto;
`;

const ListWrapper = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

const Button = styled(BaseButton.Warning)`
  margin-top: 10px;
  flex: 1;
  font-size: 30px;
  border-radius: 7px;
  justify-content: space-evenly;
`;

const MenuWrapper = styled.div``;

const modalTypes = {
  DETAILS: "DETAILS",
  CONFIRM: "CONFIRM",
  NOTE: "NOTE",
  SUCCESS: "SUCCESS",
};

const Menu = ({ history }) => {
  const [authTableNum, setAuthTableNum] = useContext(AuthTableNumContext);
  const [whichModalShown, setWhichModalShown] = useState();
  const [selectedCard, setSelectedCard] = useState();
  const [selectedOrderItemId, setSelectedOrderItemId] = useState();
  const [orderListItems, setOrderListItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState();
  const [selectedCategory, setSelectedCategory] = useState("hamburgers");

  const sidebarButtons = useMemo(
    () => ({
      top: [
        {
          name: "arrow-left",
          onClick: () => history.goBack(),
        },
      ],
      center: [
        {
          name: "hamburger",
          onClick: () => setSelectedCategory("hamburgers"),
        },
        {
          name: "fish",
          onClick: () => setSelectedCategory("fish"),
        },
        {
          name: "pizza-slice",
          onClick: () => setSelectedCategory("pizza"),
        },
        {
          name: "seedling",
          onClick: () => setSelectedCategory("salads"),
        },
        {
          name: "wine-glass-alt",
          onClick: () => setSelectedCategory("beverages"),
        },
      ],
      bottom: [
        {
          name: "ice-cream",
          onClick: () => setSelectedCategory("desserts"),
        },
        {
          name: "mug-hot",
          onClick: () => setSelectedCategory("hot-drinks"),
        },
      ],
    }),
    [history]
  );

  const fetchProducts = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await axios.get("/products");
      setProducts(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleCardInfoClick = useCallback((cardInfo) => {
    setWhichModalShown(modalTypes.DETAILS);
    setSelectedCard(cardInfo);
  }, []);

  const handleAddItemClick = useCallback(
    ({ productId, name, price }) => {
      const listItemId = uuidv4();
      setOrderListItems([
        ...orderListItems,
        {
          productId,
          listItemId: listItemId,
          Product: { name: name, price: Number(price) },
          note: "",
        },
      ]);
    },
    [orderListItems]
  );

  const handleRemoveItem = useCallback(
    (idToRemove) => {
      const removeItem = orderListItems.filter(
        ({ listItemId }) => listItemId !== idToRemove
      );
      setOrderListItems(removeItem);
    },
    [orderListItems]
  );

  const handleAddNote = useCallback(
    (noteInfo) => {
      const newState = [...orderListItems];
      newState.find(
        (item) => item.listItemId === selectedOrderItemId
      ).note = noteInfo;
      setOrderListItems(newState);
      setWhichModalShown(null);
      setSelectedOrderItemId(null);
    },
    [selectedOrderItemId, orderListItems]
  );

  const createNewOrder = useCallback(async () => {
    try {
      const res = await axios.post("/orders", {
        tableNum: authTableNum,
        isActive: true,
        orderedProducts: [...orderListItems],
      });
      setWhichModalShown(modalTypes.SUCCESS);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }, [orderListItems, authTableNum]);

  return (
    <MenuWrapper>
      {whichModalShown === modalTypes.DETAILS && (
        <DetailsModal
          selectedCard={selectedCard}
          onHide={() => setWhichModalShown(null)}
          onAddItem={() => handleAddItemClick(selectedCard)}
        />
      )}

      {whichModalShown === modalTypes.NOTE && (
        <NoteModal
          title="Add Note"
          value={
            orderListItems.find(
              ({ listItemId }) => listItemId === selectedOrderItemId
            ).note
          }
          onHide={() => setWhichModalShown(null)}
          onConfirm={(noteInfo) => handleAddNote(noteInfo)}
        />
      )}

      {whichModalShown === modalTypes.CONFIRM && (
        <ConfirmModal
          description="Are you sure you want to send the order?"
          onHide={() => setWhichModalShown(null)}
          onConfirm={() => createNewOrder()}
        />
      )}

      {whichModalShown === modalTypes.SUCCESS && (
        <SuccessModal
          title="Order is on the way!"
          onHide={() => history.goBack()}
        />
      )}

      <Screen>
        <Sidebar
          top={sidebarButtons.top}
          center={sidebarButtons.center}
          bottom={sidebarButtons.bottom}
        />
        <ContentWrapper>
          <Title>{selectedCategory}</Title>
          {isLoading && <LoadingSpinner />}

          <CardsWrapper>
            {products &&
              products.map(({ id, Category, inStock, ...cardProps }) => {
                return selectedCategory === Category.name && inStock ? (
                  <Card
                    key={id}
                    productId={id}
                    onInfoClicked={handleCardInfoClick}
                    onAddClicked={handleAddItemClick}
                    {...cardProps}
                  />
                ) : null;
              })}
          </CardsWrapper>
        </ContentWrapper>
        <ListWrapper>
          <OrderList
            items={orderListItems}
            onAddNote={(listItemId) => {
              setWhichModalShown(modalTypes.NOTE);
              setSelectedOrderItemId(listItemId);
            }}
            onRemoveItem={(listItemId) => handleRemoveItem(listItemId)}
          ></OrderList>
          <Button
            disabled={orderListItems.length === 0 || !authTableNum}
            onClick={() => setWhichModalShown(modalTypes.CONFIRM)}
          >
            Take an Order <Icon name={"angle-double-right"} />
          </Button>
        </ListWrapper>
      </Screen>
    </MenuWrapper>
  );
};

export default Menu;
