import React, { useEffect, useState, ReactElement } from 'react';
import Swiper from 'swiper';

export type bannerType = {
  imageUrl: string;
};

type SliderProps = {
  bannerList: bannerType[];
};

const Slider: React.FC<SliderProps> = function Slider({ bannerList: [] }) {};

export default React.memo(Slider);
