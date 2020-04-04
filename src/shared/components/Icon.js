import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ size }) => (size === "large" ? "36px" : "16px")};
`;

const Icon = (props) => (
  <IconWrapper>
    <FontAwesomeIcon icon={props.icon} />
  </IconWrapper>
);

export default Icon;
