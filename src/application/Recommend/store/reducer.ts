import * as actionTypes from './constants';

type RecommendStateType = {
  bannerList: bannerType[],
  recommendList: recommendType[]
}

const defaultState: RecommendStateType = {
  bannerList: [],
  recommendList: []
}

export default (state = defaultState, )
