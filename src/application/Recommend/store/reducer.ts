import { Reducer } from 'redux';
import { CHANGE_BANNER, CHANGE_RECOMMEND_LIST, RecommendActionTypes } from './constants';

const defaultState: IRecommendState = {
  bannerList: [],
  recommendList: [],
};

const recommendReducer: Reducer<IRecommendState, RecommendActionTypes> = (
  state = defaultState,
  action,
) => {
  const newState: IRecommendState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case CHANGE_BANNER:
      newState.bannerList = action.payload;
      break;
    case CHANGE_RECOMMEND_LIST:
      newState.recommendList = action.payload;
      break;
    default:
      break;
  }
  return newState;
};

export default recommendReducer;
