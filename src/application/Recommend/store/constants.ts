import { Action } from 'redux';

export const CHANGE_BANNER = 'recommend/CHANGE_BANNER';

export const CHANGE_RECOMMEND_LIST = 'recommend/RECOMMEND_LIST';

interface IChangeBannerAction extends Action {
  type: typeof CHANGE_BANNER;
  payload: bannerType[];
}

interface IChangeRecommendAction extends Action {
  type: typeof CHANGE_RECOMMEND_LIST;
  payload: recommendType[];
}

export type RecommendActionTypes = IChangeBannerAction | IChangeRecommendAction;
