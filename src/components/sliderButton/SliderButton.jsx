
import React from 'react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

import cls from "./SliderButton.module.scss";
import classNames from 'classnames';

const SliderButton = ({direct , handleClick}) => {

  return (
    <div>
      <button 
      onClick={handleClick}
      className={
        direct === "left"
          ? classNames(cls.slider_button , cls.left)
          : classNames(cls.slider_button , cls.right)
      }>
        {
          direct === "left"
            ? <AiOutlineArrowLeft />
            : <AiOutlineArrowRight />
        }
      </button>
    </div>
  )
}

export default SliderButton;
