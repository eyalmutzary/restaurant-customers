import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";
import { StorybookWrapper } from "../../theme/common";

storiesOf("Button", module).add("All", () => (
  <StorybookWrapper>
    <Button>Hello Button</Button>
    <Button disabled>Hello Button</Button>
    <Button.Primary>Hello Button</Button.Primary>
    <Button.Primary disabled>Hello Button</Button.Primary>
  </StorybookWrapper>
));
