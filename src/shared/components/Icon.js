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
  faStarOfLife
);

const IconWrapper = styled.span``;

const Icon = ({ name, ...rest }) => (
  <IconWrapper {...rest}>
    <FontAwesomeIcon icon={name} />
  </IconWrapper>
);

export default Icon;
