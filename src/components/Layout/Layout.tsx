import React, { useContext } from 'react';
import Switch from 'react-switch';
import Sidebar from '../Sidebar/Sidebar';

import { ThemeContext } from 'styled-components';
import { Container } from './styles';

interface Props {
  toggleTheme(): void;

}

const Layout: React.FC<Props> = ({ toggleTheme, children }) => {
  const { colors, title } = useContext( ThemeContext );

  return (
      <Container>
        <Sidebar />
        <main>
          <div className="topbar">
            topbar
              <Switch 
              onChange={toggleTheme}
              checked={title === 'dark'}
              checkedIcon={false}
              uncheckedIcon={false}
              height={15}
              width={40}
              handleDiameter={20}
              offColor={colors.switchBar}
              onColor={colors.switchBar}
            />
          </div>
          <div className="content">
          {children}
          </div>
        </main>
      </Container>
  );
};

export default Layout;