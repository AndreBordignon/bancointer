import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './styles/themes/light';
import GlobalStyles from './styles/global';
import Header from './components/Header';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Header />
    <GlobalStyles />
  </ThemeProvider>
);

export default App;
