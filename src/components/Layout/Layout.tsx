import React, { useContext,  useEffect, useState } from 'react';
import api from '../../api';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, Sidebar } from './styles';
import { AxiosResponse } from 'axios';

interface Props {
  toggleTheme(): void;

}

interface Menu {
  name: string;
  url: string;
}

const Layout: React.FC<Props> = ({ toggleTheme, children }) => {
  const { colors, title } = useContext( ThemeContext );
  const [menus, setMenus] = useState<Menu[]>([]);
  
  useEffect(() => {
    api.get(`/system/menus`).then((response : AxiosResponse) => {
      setMenus(response.data);
    });
  }, []);

  return (
      <Container>
        <Sidebar >
            {menus.map(menu => (
              <div className="sidebar-item">
                <Link to={menu.url} className='menu-bars'>
                  {menu.name}
                </Link>
              </div>
            ))}
        </Sidebar>
        <main>
          <div className="topbar">
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