import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/header';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

const AppWrapper = styled.div`
  text-align: center;
  display: grid;
  grid-gap: 20px;
  grid-template-areas: 
    "header"
    "nav"
    "content"
    "footer";
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Header />
      </AppWrapper>
    </>
  );
}

export default App;
