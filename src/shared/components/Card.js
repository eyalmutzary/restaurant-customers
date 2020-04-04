import React from "react";
import styled from "styled-components";
import { Button } from "./index";

const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.silver};
  border: solid 1px ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.darkGray};
  border-radius: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 5px;
  margin: 5px;
`;

const Image = styled.img`
  padding: 0px;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
`;

const Title = styled.h4`
  font-size: 22px;
  text-align: center;
  margin: 10px 0px 10px 0px;
`;

const Card = (props) => {
  let image = null;
  if (props.type === "withImage") {
    image = <Image src={props.src ? props.src : null} alt=""></Image>;
  }
  return (
    <CardWrapper>
      {image}
      <Title>{props.title}</Title>
      <ButtonWrapper>
        <Button>?</Button>
        <Button>+</Button>
      </ButtonWrapper>
    </CardWrapper>
  );
};
export default Card;
