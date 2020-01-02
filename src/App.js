import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import List from "./components/organisms/List";
import { ReactComponent as Logo } from "./logo.svg";
import { theme } from "./config/theme";
import { StateProvider } from "./config/store";

const GlobalStyle = createGlobalStyle`
body {
  padding: 1em 2em;
  background: #f5f5ff;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}
`;

const App = () => (
  <StateProvider>
    <ThemeProvider theme={theme}>
      <center>
        <Logo width="15em" />
      </center>
      <GlobalStyle />
      <List />
    </ThemeProvider>
  </StateProvider>
);

export default App;
