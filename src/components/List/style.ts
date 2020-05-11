import styled from 'styled-components';
import style from '../../assets/globalStyle';

export const ListWrapper = styled.div`
  max-width: 100%;
  .title {
    padding-left: 6px;
    font-weight: 700;
    font-size: 14px;
    line-height: 60px;
  }
`;

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
`;

export const ListItem = styled.div`
  position: relative;
  width: 32%;

  .img_wrapper {
    .decorate {
      position: absolute;
      top: 0;
      width: 100%;
      height: 35px;
      background: linear-gradient (hsla (0, 0%, 43%, 0.4), hsla (0, 0%, 100%, 0));
      border-radius: 3px;
    }
    position: relative;
    height: 0;
    padding-bottom: 100%;
    .play_count {
      position: absolute;
      top: 2px;
      right: 2px;
      color: ${style['font-color-light']};
      font-size: ${style['font-size-s']};
      line-height: 15px;
      .play {
        vertical-align: top;
      }
    }
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 3px;
    }
  }
  .desc {
    height: 50px;
    margin-top: 2px;
    padding: 0 2px;
    overflow: hidden;
    color: ${style['font-color-desc']};
    font-size: ${style['font-size-s']};
    line-height: 1.4;
    text-align: left;
  }
`;
