import React, { useEffect, useState } from 'react';
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
import { SliderContainer } from './style';

interface ISliderProps {
  bannerList: bannerType[];
}

const Slider: React.FC<ISliderProps> = function Slider({ bannerList = [] }) {
  const [sliderSwiper, setSliderSwiper] = useState<Swiper>();

  useEffect(() => {
    if (bannerList.length !== 0 && !sliderSwiper) {
      // eslint-disable-next-line no-shadow
      const sliderSwiper = new Swiper('.slider-container', {
        loop: true,
        autoplay: true,
        pagination: { el: '.swiper-pagination' },
      });
      setSliderSwiper(sliderSwiper);
    }
  }, [bannerList.length, sliderSwiper]);

  return (
    <SliderContainer>
      <div className="slider-container">
        <div className="swiper-wrapper">
          {bannerList.map((slider) => {
            return (
              <div className="swiper-slide" key={slider.imageUrl}>
                <div className="slider-nav">
                  <img src={slider.imageUrl} width="100%" height="100%" alt="推荐" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="swiper-pagination" />
      </div>
      <div className="before" />
    </SliderContainer>
  );
};

export default React.memo(Slider);
