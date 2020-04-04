import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { theme, GlobalStyle } from "../shared/theme";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faQuestion, faPlus, faArrowLeft, faWineGlassAlt, faHamburger, faFish, faPizzaSlice, faIceCream, faSeedling, faMugHot, faStar } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faQuestion, faPlus, faArrowLeft, faWineGlassAlt, faHamburger, faFish, faPizzaSlice, faIceCream, faSeedling, faMugHot, faStar);

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <AppContainer>
        <GlobalStyle />
        <Router />
      </AppContainer>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
