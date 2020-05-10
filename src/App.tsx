import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import GlobalStyle from './style';
import IconStyle from './assets/iconfont/iconfont';
import routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <IconStyle />
      {renderRoutes(routes)}
    </BrowserRouter>
  );
}

export default hot(App);
