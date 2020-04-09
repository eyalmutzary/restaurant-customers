import React from "react";
import styled from "styled-components";
import BaseIcon from "./Icon";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  border: solid 1px ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.darkGray};
  border-radius: 3px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 280px;
  height: 300px;
  margin: 15px 10px 10px 10px;
`;

const Image = styled.img`
  flex: 1;
  object-fit: cover;
  border-radius: 3px;
`;

const Title = styled.h4`
  font-size: 20px;
  text-align: center;
  height: 30px;
  margin: 10px 0px 10px 0px;
  padding: 0px 8px 0px 8px;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 5px;
  margin: 10px;
`;

const Price = styled.div`
  font-size: 18px;
  flex: 2;
`;

const IconsWrapper = styled.div`
  display: flex;
`;

const Icon = styled(BaseIcon)`
  margin-left: 20px;
`;

const Card = ({
  productId,
  image,
  title,
  price,
  onInfoClicked,
  onAddClicked,
  description,
  ...rest
}) => (
  <CardWrapper>
    {image && <Image src={image} alt=""></Image>}
    <Title>{title}</Title>
    <ContentWrapper>
      <Price>{price}$</Price>
      <IconsWrapper>
        <Icon
          name={"question"}
          onClick={() => onInfoClicked({ title, image, price, description })}
        />
        <Icon name={"plus"} onClick={() => onAddClicked({ productId ,title, price })} />
      </IconsWrapper>
    </ContentWrapper>
  </CardWrapper>
);

export default Card;
