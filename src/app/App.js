import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { theme, GlobalStyle } from "../shared/theme";
import Store from "./Store";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const App = () => (
  <BrowserRouter>
    <Store>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <GlobalStyle />
          <Router />
        </AppContainer>
      </ThemeProvider>
    </Store>
  </BrowserRouter>
);

export default App;
