import React from 'react';
import cls from "./CardInstructor.module.scss";
import { list } from '../../utils/List';

const CardInstructor = () => {
  return (
    <React.Fragment>
      <div className={cls.card}>
        {
          list.cardList.map(item => {
            return (
              <div className={cls.card_item} key={item.id} >
                <img src={item.img} alt="" />
                <h3>{item.caption}</h3>
              </div>
            )
          })
        }
      </div>
    </React.Fragment>
  )
}

export default CardInstructor;
