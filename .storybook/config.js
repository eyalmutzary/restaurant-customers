import React from "react";
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import centered from "@storybook/addon-centered";

import { theme } from "../src/shared/theme";

addDecorator(centered);

addDecorator(story => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
