import React from "react";
import styled from "styled-components";
import { Icon } from "./index";

const SidebarWarpper = styled.div`
  width: 5vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  left: 0px;
  background-color: ${({ theme }) => theme.colors.darkGray};
  border-right: 2px solid ${({ theme }) => theme.colors.black};
`;

// faArrowLeft, faWineGlassAlt, faHamburger, faFish, faPizzaSlice, faIceCream, faSeedling, faMugHot, faStar

const Sidebar = (props) => (
  <SidebarWarpper>
    <div>
      <Icon type="category" icon="arrow-left"></Icon>
    </div>
    <div>
      <Icon type="category" icon="star"></Icon>
      <Icon type="category" icon="hamburger"></Icon>
      <Icon type="category" icon="fish"></Icon>
      <Icon type="category" icon="pizza-slice"></Icon>
      <Icon type="category" icon="seedling"></Icon>
      <Icon type="category" icon="wine-glass-alt"></Icon>
    </div>
    <div>
      <Icon type="category" icon="ice-cream"></Icon>
      <Icon type="category" icon="mug-hot"></Icon>
    </div>
  </SidebarWarpper>
);

export default Sidebar;
