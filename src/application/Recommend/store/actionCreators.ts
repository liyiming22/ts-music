/* eslint-disable promise/always-return */
import { ThunkAction } from 'redux-thunk';
import { Action, Dispatch } from 'redux';
import { CHANGE_BANNER, CHANGE_RECOMMEND_LIST, RecommendActionTypes } from './constants';
import { getBannerRequest, getRecommendListRequest } from '../../../api/request';

// type ThunkGetInfoResult<T> = ThunkAction<T, unknown, Action<RecommendActionTypes>>;
type ThunkGetInfoResult<T> = ThunkAction<
  T,
  IRecommendState,
  undefined,
  Action<RecommendActionTypes>
>;

export function changeBannerList(bannerList: bannerType[]): RecommendActionTypes {
  return {
    type: CHANGE_BANNER,
    payload: bannerList,
  };
}

export function changeRecommendList(recommendList: recommendType[]): RecommendActionTypes {
  return {
    type: CHANGE_RECOMMEND_LIST,
    payload: recommendList,
  };
}

export const thunkGetBannerList = (): ThunkGetInfoResult<void> => {
  return (dispatch: Dispatch) => {
    getBannerRequest()
      .then((data) => {
        console.log(data);
        dispatch(changeBannerList(data.banners));
      })
      .catch(() => {
        console.log('轮播图数据传输错误');
      });
  };
};

export const thunkGetRecommendList = (): ThunkGetInfoResult<void> => {
  return (dispatch: Dispatch) => {
    getRecommendListRequest()
      .then((data) => {
        dispatch(changeRecommendList(data.result));
      })
      .catch(() => {
        console.log('推荐歌单数据传输错误');
      });
  };
};
