// eslint-disable-next-line no-unused-vars
export default (apiBase) => ({
    api: {
        search: {
            uri: `${apiBase}/search.json`,
            qs: {
                key: 'a758f4d24494458fa1763006182309',
            },
        },
        current: {
            uri: `${apiBase}/current.json`,
            qs: {
                key: 'a758f4d24494458fa1763006182309',
            },
        },
        forecast: {
            uri: `${apiBase}/forecast.json`,
            qs: {
                key: 'a758f4d24494458fa1763006182309',
                days: 7,
            },
        },
    },
});
