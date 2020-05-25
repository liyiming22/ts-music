/* eslint-disable consistent-return */
import React, { forwardRef, useState, useEffect, useRef, useImperativeHandle } from 'react';
import BScroll from 'better-scroll';
import styled from 'styled-components';

type scrollPositionType = {
  x: number;
  y: number;
};

const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

interface IScrollProps extends React.ComponentPropsWithoutRef<'div'> {
  direction?: 'vertical' | 'horizontal';
  refresh?: boolean;
  pullUp?: Function;
  pullDown?: Function;
  pullUpLoading?: boolean;
  pullDownLoading?: boolean;
  bounceTop?: boolean;
  bounceBottom?: boolean;
  click?: boolean;
  children?: React.ReactNode;
  onBScroll?: (scroll: number) => void;
}

interface IScrollRef {
  refreshScroll: () => void;
  getBScroll: () => BScroll | null;
}

const Scroll = forwardRef<IScrollRef, IScrollProps>((props, ref) => {
  const [bScroll, setBScroll] = useState<BScroll | null>(null);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const {
    direction = 'vertical',
    click = true,
    refresh = true,
    bounceTop = true,
    bounceBottom = true,
  } = props;

  const { pullUp, pullDown, onBScroll } = props;

  useEffect(() => {
    const scroll = new BScroll(scrollContainerRef.current!, {
      scrollX: direction === 'horizontal',
      scrollY: direction === 'vertical',
      probeType: 3,
      click,
      bounce: {
        top: bounceTop,
        bottom: bounceBottom,
      },
    });
    setBScroll(scroll);
    return () => {
      setBScroll(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!bScroll || !onBScroll) return;
    bScroll.on('scroll', (scroll: number) => {
      onBScroll(scroll);
    });
    return () => {
      bScroll.off('scroll');
    };
  }, [onBScroll, bScroll]);

  useEffect(() => {
    if (!bScroll || !pullUp) return;
    bScroll.on('scrollEnd', () => {
      // 判断是否滑动到了底部
      if (bScroll.y <= bScroll.maxScrollY + 100) {
        pullUp();
      }
    });
    return () => {
      bScroll.off('scrollEnd');
    };
  }, [pullUp, bScroll]);

  useEffect(() => {
    if (!bScroll || !pullDown) return;
    bScroll.on('touchEnd', (pos: scrollPositionType) => {
      if (pos.y > 50) {
        pullDown();
      }
    });
    return () => {
      bScroll.off('touchEnd');
    };
  }, [pullDown, bScroll]);

  useEffect(() => {
    if (refresh && bScroll) {
      bScroll.refresh();
    }
  });

  const refreshScroll = (): void => {
    if (bScroll) {
      bScroll.refresh();
      bScroll.scrollTo(0, 0);
    }
  };

  const getBScroll = (): BScroll | null => {
    return bScroll;
  };

  useImperativeHandle(ref, () => {
    return {
      refreshScroll,
      getBScroll,
    };
  });

  return <ScrollContainer>{props.children}</ScrollContainer>;
});

export default React.memo(Scroll);
