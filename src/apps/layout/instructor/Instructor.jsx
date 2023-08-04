import React from 'react';
import { list } from '../../../utils/List';
import CardInstructor from '../../../components/cardInstructor/CardInstructor';
import Container from '../../../components/container/Container';
import { Link } from 'react-router-dom';

import cls from "./Instructor.module.scss";
import { Providers } from '../../../providers';

const Instructor = () => {
  const { user , token } = Providers.useAuth();

  return (
    <div>
      {
        (user && token)
            ? <React.Fragment>
            <Container />
            <div className={cls.instructor}>
                <h1>Инструкторы</h1>
                <h2>안무가</h2>
              </div>
              <div className={cls.row}>
                <CardInstructor />
              </div>
              <div className={cls.studio_banner}>
                <h2>Совершите виртуальный тур <br/>по нашей студии</h2>
                <button>Стартовый тур</button>
              </div> 
              <div className={cls.instructor_block}>
                {
                  list.QuestionList.map(item => (
                    <Link to={item.routes} key={item.id} className={cls.instructor_block_item}>
                      <h3>{item.caption}</h3>
                      <h2>{item.word}</h2>
                    </Link>  
                  ))
                }
              </div>
            <Container />
          </React.Fragment>
          : <React.Fragment>
              <h1>Ты должен зарегистрироваться!</h1>
            </React.Fragment>
      }
    </div>
  )
}

export default Instructor;