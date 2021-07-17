import React from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistetState from './utils/usePersistedState';


import light from './styles/theme/light';
import dark from './styles/theme/dark';

import GlobalStyle from './styles/global';
import Layout from './components/Layout/Layout';
import Routes from './routes';



function App() {
  const [theme, setTheme] = usePersistetState<DefaultTheme>('theme', dark);

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
          <GlobalStyle />
            <Layout  toggleTheme={toggleTheme}>
              <Routes />
            </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;
