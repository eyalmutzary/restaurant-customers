import React from "react";
import styled from "styled-components";
import BaseButton from "./Button";
import Icon from "./Icon";

const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: solid 1px ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.darkGray};
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 180px;
  margin: 15px 10px 10px 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 5px;
  margin: 5px;
`;

const Image = styled.img`
  padding: 0px;
  max-width: 180px;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
`;

const Title = styled.h4`
  font-size: 22px;
  text-align: center;
  margin: 10px 0px 10px 0px;
`;

const Button = styled(BaseButton)`
  width: 60px;
`;

const Card = ({ image, title }) => (
  <CardWrapper>
    {image && <Image src={image} alt=""></Image>}
    <Title>{title}</Title>
    <ButtonWrapper>
      <Button>
        <Icon name={"question"}></Icon>
      </Button>
      <Button>
        <Icon name={"plus"}></Icon>
      </Button>
    </ButtonWrapper>
  </CardWrapper>
);

export default Card;
