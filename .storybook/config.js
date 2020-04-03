import React from "react";
import { addDecorator } from "@storybook/react";
import centered from "@storybook/addon-centered";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/shared/theme";

addDecorator(centered);
addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
