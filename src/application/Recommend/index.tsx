/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { thunkGetBannerList, thunkGetRecommendList } from './store/actionCreators';
import Scroll from '../../components/Scroll';
import Slider from '../../components/Slider';
import RecommendList from '../../components/List';
import { RootState } from '../../store/reducer';
import { Content } from './style';

const Recommend: React.FC = function Recommend() {
  const { bannerList, recommendList } = useSelector((state: RootState) => state.recommend);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkGetBannerList());
    dispatch(thunkGetRecommendList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Content>
      <Scroll className="list">
        <div>
          <Slider bannerList={bannerList} />
          <RecommendList recommendList={recommendList} />
        </div>
      </Scroll>
    </Content>
  );
};

export default React.memo(Recommend);
