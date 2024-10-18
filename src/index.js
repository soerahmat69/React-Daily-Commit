import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Main } from './Main';
import IndexRoutes from './LearnRouter/IndexRoutes';
import { Provider } from 'react-redux';
import store from './Ngeredux/store/store';
import Porto from './Porto/Porto';
import PortoSec from './Porto/PortoSec';
import "nes.css/css/nes.min.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <PortoSec />
        {/* <Provider store={store}>
        <Main/>
        </Provider> */}
        {/* <IndexRoutes /> */}
  </React.StrictMode>
);
