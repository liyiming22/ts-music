import { axiosInstance } from './config';

type bannerResponse = {
  code: number,
  banners: bannerType[],
};

type recommendListResponse = {
  code: number,
  category: number,
  hasTaste: boolean,
  result: recommendType[],
};

export const getBannerRequest = (): Promise<bannerResponse> => {
  return axiosInstance.get('/banner');
};

export const getRecommendListRequest = (): Promise<recommendListResponse> => {
  return axiosInstance.get('/personalized');
};
