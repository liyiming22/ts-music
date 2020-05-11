import React from 'react';
import { ListWrapper, ListItem, List } from './style';
import { getCount } from '../../utils';

export type recommendListType = {
  id: number;
  picUrl: string;
  playCount: number;
  name: string;
};

interface IListProps {
  recommendList: recommendListType[];
}

const RecommendList: React.FC<IListProps> = function RecommendList({ recommendList = [] }) {
  return (
    <ListWrapper>
      <h1 className="title">推荐歌单</h1>
      <List>
        {recommendList.map((item, idx) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <ListItem key={item.id + idx}>
              <div className="img_wrapper">
                <div className="decorate" />
                {/* 减小请求的图片资源大小 */}
                <img src={`${item.picUrl}?param=300x300`} width="100%" height="100%" alt="album" />
                <div className="play_count">
                  <i className="iconfont play">&#xe885;</i>
                  <span className="count">{getCount(item.playCount)}</span>
                </div>
              </div>
            </ListItem>
          );
        })}
      </List>
    </ListWrapper>
  );
};

export default React.memo(RecommendList);
