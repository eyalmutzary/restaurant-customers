import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faQuestion,
  faPlus,
  faArrowLeft,
  faWineGlassAlt,
  faHamburger,
  faFish,
  faPizzaSlice,
  faIceCream,
  faSeedling,
  faMugHot,
  faStar,
  faEdit,
  faTimes,
  faStarOfLife,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faQuestion,
  faPlus,
  faArrowLeft,
  faWineGlassAlt,
  faHamburger,
  faFish,
  faPizzaSlice,
  faIceCream,
  faSeedling,
  faMugHot,
  faStar,
  faEdit,
  faTimes,
  faStarOfLife,
  faAngleDoubleRight
);

const IconWrapper = styled.div``;

// const IconCSS = styled(Icon)`
//   cursor: pointer;
//   &:hover {
//     color: ${({ theme }) => theme.colors.darkGray};
//     transition: 0.4s;
//   }
// `;

const Icon = ({ name, ...rest }) => (
  <IconWrapper {...rest}>
    <FontAwesomeIcon icon={name} />
  </IconWrapper>
);

export default Icon;
