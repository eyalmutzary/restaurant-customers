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
  faStar
);

const IconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ size }) => (size === "large" ? "36px" : "16px")};
`;

const Icon = ({ name, ...rest }) => {
  console.log(rest);
  return (
    <IconWrapper {...rest}>
      <FontAwesomeIcon icon={name} />
    </IconWrapper>
  );
};

export default Icon;
