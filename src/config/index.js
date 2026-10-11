import _ from 'lodash';
import log from 'loglevel';

import apiConfig from './api';
import languagesConfig from './languages';

/**
 * LOAD NODE_ENV CONFIG
 */
const envNode = process.env.NODE_ENV;
const envNodeConfigs = import.meta.glob('./enviromentNode/*.js', { eager: true, import: 'default' });
const envNodeConfig = envNodeConfigs[`./enviromentNode/${envNode}.js`];

// Get apiBase from NODE_ENV config
const apiBase = _.get(envNodeConfig, 'api.base');

/**
 * DEFAULT CONFIG
 */
const defaults = {
    // default configuration goes here
    devTools: true,
    logLevel: log.levels.TRACE,
    history: {
        basename: '/',
    },
};

/**
 * MERGE ALL CONFIGS TOGETHER
 */
const config = _.merge(
    defaults,
    apiConfig(apiBase),
    languagesConfig,
    envNodeConfig,
);

export default config;
