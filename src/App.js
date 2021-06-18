import React, { useState } from 'react';
import Template from './Template';
import Head from './Head';
import Main from './Main';
import Foot from './Foot';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
  palette: {
    bg: '#a1a7b5',
    search: '#548ae9',
    main: '#393842',
    box: '#EFF141',
  }
};

// 낮밤에 따른 색 조작
// mainDay: '#393842',
// boxDay: '#EFF141',
// mainNight: '#fefffe',
// boxNight: '#242434'

const GlobalStyle = createGlobalStyle`
  body {
    background: ${theme.palette.bg};
  }
`;


function App() {
  const [toggle, setToggle] = useState(false);
  const search = () => {
    setToggle(!toggle);
  }
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Template>
        <Head search={search}></Head>
        <Main toggle={toggle}></Main>
        <Foot></Foot>
      </Template>
    </ThemeProvider>
  );
}

export default App;
