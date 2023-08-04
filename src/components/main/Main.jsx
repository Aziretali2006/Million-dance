import React from 'react';
import { list } from '../../utils/List';
import { Link } from 'react-router-dom';

import cls from "./Main.module.scss";

const Main = () => {
  return (
    <React.Fragment>
      <div className={cls.banner_parents}>
        <div className={cls.banner_parents_block}>
          <p>원밀리언 댄스 스튜디오</p>
          <h2>We don't need</h2>
          <h1>A stage to <br></br> dance</h1>
          <div className={cls.banner_parents_block_gif}>

          </div>
          <button>
            More about us 
          </button>
        </div>
      </div>

      <div className={cls.information}>
        <div className={cls.information_teacher}>
          <div>
            <p>Robert Joseph</p>
            <button>
              see instructor profile
            </button>
          </div>
        </div>
        <div className={cls.information_schedule}>
          <div>
            <p>schedule</p>
            <button>
              read more
            </button>
          </div>
        </div>
      </div>

      <div className={cls.followUS}>
        <p>Follow Us @1milliondance</p>
      </div>

      <div className={cls.categories}>
        {
          list.categoriesList.map(item => (
            <Link to={item.routes} key={item.id} className={cls.categories_item}>
              <p>
                {item.caption}
              </p>
            </Link>
          ))
        }
      </div>
    </React.Fragment>
  )
}

export default Main;
 