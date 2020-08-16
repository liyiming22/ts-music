declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

  const src: string;
  export default src;
}

declare module '*.bmp' {
  const path: string;
  export default path;
}

declare module '*.gif' {
  const path: string;
  export default path;
}

declare module '*.jpg' {
  const path: string;
  export default path;
}

declare module '*.jpeg' {
  const path: string;
  export default path;
}

declare module '*.png' {
  const path: string;
  export default path;
}

declare type bannerType = {
  imageUrl: string;
};

declare type recommendType = {
  id: number;
  picUrl: string;
  playCount: number;
  name: string;
};

declare interface IRecommendState {
  bannerList: bannerType[];
  recommendList: recommendType[];
}
