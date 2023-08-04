
import React from 'react';
import Container from '../container/Container';
import { list } from '../../utils/List';
import { Link, NavLink } from 'react-router-dom';

import cls from "./Header.module.scss";
import { Providers } from '../../providers';

const Header = () => {

  return (
    <section>
      <Container>
        <div className={cls.navbar}>
          <ul>
            {
              list.navbarList.map(item => {
                return (
                  <Link to={item.routess} key={item.id}>
                    {item.logo}
                  </Link>
                )
              })
            }
          </ul>
          <ul>
            {
              list.navbarList.map(item => {
                return(
                  <NavLink to={item.routess} key={item.id}>
                    {item.caption}
                    {item.icon && <item.icon />}
                  </NavLink>
                )
              })
            }
          </ul> 
        </div>
      </Container>
    </section>
  )
}

export default Header;
