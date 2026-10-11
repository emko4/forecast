// eslint-disable-next-line no-unused-vars
export default (apiBase) => ({
    api: {
        search: {
            uri: `${apiBase}/search.json`,
            qs: {
                key: '0e80460f600c423f8b3141458201006',
            },
        },
        current: {
            uri: `${apiBase}/current.json`,
            qs: {
                key: '0e80460f600c423f8b3141458201006',
            },
        },
        forecast: {
            uri: `${apiBase}/forecast.json`,
            qs: {
                key: '0e80460f600c423f8b3141458201006',
                days: 3,
            },
        },
    },
});
