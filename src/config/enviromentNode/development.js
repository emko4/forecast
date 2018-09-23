import log from 'loglevel';

const config = {
    // dev config goes here
    api: {
        base: 'https://gnosus.bisnode.cz',
        socket: {
            uri: 'wss://gnosus.bisnode.cz/ws-mq',
        },
    },
    devTools: true,
    logLevel: log.levels.TRACE,
};

export default config;
