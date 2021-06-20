import React from 'react';
import Template from './Template';
import Head from './Head';
import Main from './Main';
import Foot from './Foot';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { ContextProvider } from './Context';

const theme = {
  palette: {
    bg: '#a1a7b5',
    search: '#548ae9',
    main: '#393842',
    box: '#EFF141',
    mainNight: '#fefffe',
    boxNight: '#242434'
  }
};

const GlobalStyle = createGlobalStyle`
  body {
    background: ${theme.palette.bg};
  }
`;


function App() {
  return (
    <ContextProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Template>
          <Head></Head>
          <Main></Main>
          <Foot></Foot>
        </Template>
      </ThemeProvider>
    </ContextProvider>
  );
}

export default App;
