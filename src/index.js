import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import '@/style/reset.css';
import App from '@/App.jsx';
import store from '@/redux/store.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App></App>
        </HashRouter>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
