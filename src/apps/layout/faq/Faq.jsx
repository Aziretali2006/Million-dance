import React from 'react';
import cls from "./Faq.module.scss";
import { list } from '../../../utils/List';

const Faq = () => {
  return (
    <React.Fragment>
      <section  className={cls.faq}>
        <div className={cls.faq_block}>
          <h2>Часто задаваемые <br /> вопросы</h2>
          <ul className={cls.faq_block_component}>
            {list.faqList.map(item => (
              <li className={cls.faq_block_component_item} key={item.id}>
                <p>{item.question}</p>
                {item.img && <item.img />}
              </li>
            ))}
          </ul>
          <div className={cls.faq_block_question}>
            <p>Есть вопросы?</p>
          </div>
          <div className={cls.faq_block_card}>
            {
              list.QuestionList.map(item => (
                <div key={item.id} className={cls.faq_block_card_item}>
                  <h3>{item.caption}</h3>
                  <h2>{item.word}</h2>
                </div>  
              ))
            }
        </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Faq
