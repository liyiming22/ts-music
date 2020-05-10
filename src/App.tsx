import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import store from './store';
import GlobalStyle from './style';
import IconStyle from './assets/iconfont/iconfont';
import routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <IconStyle />
        {renderRoutes(routes)}
      </BrowserRouter>
    </Provider>
  );
}

export default hot(App);
