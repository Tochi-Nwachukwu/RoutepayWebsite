"use client";

import React, { useRef, forwardRef, useImperativeHandle, ReactNode } from 'react';
import Slider from 'react-slick';

interface SimpleSliderProps {
  children: ReactNode;
  slideToShowLg: number;
  slideToShowMd: number;
  slideToShowSm: number;
  prevButtonCustom?: string;
  nextButtonCustom?: string;
  dot?: boolean;
  afterChange?: (index: number) => void;
  slidesToScroll: number;
}

export interface SimpleSliderRef {
  slickNext: () => void;
  slickPrev: () => void;
  slickGoTo: (index: number) => void;
}

const SimpleSlider = forwardRef<SimpleSliderRef, SimpleSliderProps>(
  (
    {
      children,
      slideToShowLg,
      slideToShowMd,
      slideToShowSm,
      // prevButtonCustom,
      // nextButtonCustom,
      dot,
      afterChange,
      slidesToScroll,
    },
    ref
  ) => {
    const sliderRef = useRef<Slider>(null);

    // Expose slick methods to parent via ref
    useImperativeHandle(ref, () => ({
      slickNext: () => sliderRef.current?.slickNext(),
      slickPrev: () => sliderRef.current?.slickPrev(),
      slickGoTo: (index: number) => sliderRef.current?.slickGoTo(index),
    }));

    const settings = {
      dots: dot,
      infinite: true,
      speed: 500,
      slidesToShow: slideToShowLg,
      slidesToScroll: slidesToScroll,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: 'linear',
      arrows: false,
      responsive: [
        {
          breakpoint: 850,
          settings: {
            slidesToShow: slideToShowMd,
            slidesToScroll: slideToShowMd,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: slideToShowSm,
            slidesToScroll: slideToShowSm,
          },
        },
      ],
      afterChange, // Trigger after slide changes
    };

    return (
      <div className="slider-container relative">
        <Slider ref={sliderRef} {...settings}>
          {children}
        </Slider>
        {/* <button
          className={prevButtonCustom}
          onClick={() => sliderRef.current.slickPrev()}>
          <FaArrowLeft size={20} color={'#fff'} />
        </button>
        <button
          className={nextButtonCustom}
          onClick={() => sliderRef.current.slickNext()}>
          <FaArrowRight size={20} color={'#fff'} />
        </button> */}
      </div>
    );
  }
);

SimpleSlider.displayName = 'SimpleSlider';

export default SimpleSlider;
