import React from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistetState from './utils/usePersistedState';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import light from './styles/theme/light';
import dark from './styles/theme/dark';

import GlobalStyle from './styles/global';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects/Projects';

function App() {
  const [theme, setTheme] = usePersistetState<DefaultTheme>('theme', dark);

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark);
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
            <GlobalStyle />
            <Layout toggleTheme={toggleTheme}>
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/Projects' component={Projects} />
              </Switch>
            </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
