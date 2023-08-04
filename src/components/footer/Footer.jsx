import React from 'react';
import cls from "./Footer.module.scss";
import { list } from '../../utils/List';
import Container from '../container/Container';

const Footer = () => {
  return (
    <React.Fragment>
      <div className={cls.footer_parents}>
        <Container>
          <div className={cls.footer_parents_block}>
            <ul>
              {
                list.footerListLeft.map(item => (
                  <div key={item.id}>
                    <p>{item.names}</p>
                    <li>
                      {item.caption}
                    </li>
                  </div>
                ))
              }
            </ul>
            <ul>
              {
                list.footerListRight.map(item => (
                  <div key={item.id}>
                    <p>
                      {item.names}
                    </p>
                    <li>
                      {item.caption}
                    </li>
                  </div>
                ))
              }
            </ul>
          </div>
          <div className={cls.footer_parents_block_item}>
            <h1>1million</h1>
            <b>dance studio <br />seoul</b>
            <p>+ 82 2 512 6756</p>
            <h2>studio@1milliondance.com</h2>
          </div>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Footer
