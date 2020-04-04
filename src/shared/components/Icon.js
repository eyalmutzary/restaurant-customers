import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ size }) => (size === "large" ? "36px" : "16px")};
`;

IconWrapper.Category = styled(IconWrapper)`
  font-size: 36px;
  text-align: center;
  margin: 10px 0px 10px 0px;
`;

const Icon = (props) => {
  let item = null;
  if (props.type === "category") {
    item = (
      <IconWrapper.Category>
        <FontAwesomeIcon icon={props.icon} />
      </IconWrapper.Category>
    );
  } else {
    item = (
      <IconWrapper>
        <FontAwesomeIcon icon={props.icon} />
      </IconWrapper>
    );
  }

  return item;
};

export default Icon;
