
import React from 'react';
import ReactDOM from 'react-dom';

import log from 'loglevel';

import configureStore from './store';
import config from '../config';

import Root from './Root';

// create store and sync browser history
// MUST be propagated by props, because of HOT RELOAD
const { store, history } = configureStore();

// set log level from config by NODE_ENV
log.setLevel(config.logLevel);

// eslint-disable-next-line no-undef
const app = document.getElementById('app');

ReactDOM.render(
    <Root
        store={store}
        history={history}
    />,
    app,
);

if (import.meta.hot) {
    import.meta.hot.accept('./Root', (newModule) => {
        if (!newModule) return;

        const NewRoot = newModule.default;

        ReactDOM.render(
            <NewRoot
                store={store}
                history={history}
            />,
            app,
        );
    });
}
