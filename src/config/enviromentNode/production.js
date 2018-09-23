import log from 'loglevel';

const config = {
    // production config goes here
    api: {
        base: 'https://gnosus.bisnode.cz',
        socket: {
            uri: 'wss://gnosus.bisnode.cz/ws-mq',
        },
    },
    devTools: false,
    logLevel: log.levels.ERROR,
};

export default config;
