import log from 'loglevel';

const config = {
    // dev config goes here
    api: {
        base: 'https://api.weatherapi.com/v1',
    },
    devTools: true,
    logLevel: log.levels.TRACE,
};

export default config;
