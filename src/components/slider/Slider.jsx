import React from 'react';
import Container from '../container/Container';
import { list } from '../../utils/List';
import classNames from 'classnames';
import SliderButton from '../sliderButton/SliderButton';

import cls from "./Slider.module.scss";

const Slider = () => {
  const [currentSlider , setCurrentSlider] = React.useState(1);

  
  const nextSlider = () => {
    if(currentSlider !== list.sliderList.length) {
      setCurrentSlider(currentSlider + 1)
    } else {
      setCurrentSlider(1)
    }
  }

  const prevSlider = () => {
    if(currentSlider > 1) {
      setCurrentSlider(currentSlider - 1)
    } else {
      setCurrentSlider(list.sliderList.length)
    }
  }

  return (
    <React.Fragment>
      <Container>
        <div className={cls.slider_parent}>
          <div className={cls.slider_parent_block}>
            {
              list.sliderList.map((item  , index) => (
                <div
                  key={item.id}
                  style={{background: `url("${item.image}") center / cover`}}
                  className={
                    currentSlider === index + 1
                      ? classNames(cls.slider_item , cls.activeSlider)
                      : classNames(cls.slider_item)
                  }
                >
                  <SliderButton direct="left" handleClick={prevSlider}/>
                  <SliderButton direct="right" handleClick={nextSlider}/>
                </div>
              ))
            }
          </div>
        </div>
      </Container>
    </React.Fragment>
  )
}

export default Slider;
