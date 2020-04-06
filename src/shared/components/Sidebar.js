import React from "react";
import styled from "styled-components";
import BaseIcon from "./Icon";

const SidebarWarpper = styled.div`
  width: 5vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.darkGray};
  border-right: 2px solid ${({ theme }) => theme.colors.black};
`;

const Wrapper = styled.div``;

const Icon = styled(BaseIcon).attrs({ size: "large" })`
  display: block;
  text-align: center;
  font-size: 36px;
  margin: 10px 0px 10px 0px;
  color: ${({ theme }) => theme.colors.gray};

  &:hover {
    transition: 0.4s;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
  }
`;

const Sidebar = () => (
  <SidebarWarpper>
    <Wrapper>
      <Icon name="arrow-left"></Icon>
    </Wrapper>
    <Wrapper>
      <Icon name="star"></Icon>
      <Icon name="hamburger"></Icon>
      <Icon name="fish"></Icon>
      <Icon name="pizza-slice"></Icon>
      <Icon name="seedling"></Icon>
      <Icon name="wine-glass-alt"></Icon>
    </Wrapper>
    <Wrapper>
      <Icon name="ice-cream"></Icon>
      <Icon name="mug-hot"></Icon>
    </Wrapper>
  </SidebarWarpper>
);

export default Sidebar;
