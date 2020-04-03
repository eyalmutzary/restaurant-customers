import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    margin-bottom: 5px;
  }
`;

storiesOf("Button", module).add("All", () => (
  <Wrapper>
    <Button>Hello Button</Button>
    <Button disabled>Hello Button</Button>
    <Button.Primary>Hello Button</Button.Primary>
    <Button.Primary disabled>Hello Button</Button.Primary>
  </Wrapper>
));
