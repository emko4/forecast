import log from 'loglevel';

const config = {
    // production config goes here
    api: {
        base: 'https://api.weatherapi.com/v1',
    },
    devTools: false,
    logLevel: log.levels.ERROR,
};

export default config;
