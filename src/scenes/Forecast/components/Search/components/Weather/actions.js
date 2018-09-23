import { FORECAST_REQUEST } from './constants';

import config from '../../../../../../config';

// eslint-disable-next-line import/prefer-default-export
export function forecastRequest(location, lang) {
    return {
        type: FORECAST_REQUEST,
        payload: {
            ...config.api.forecast,
            qs: {
                ...config.api.forecast.qs,
                q: location,
                lang,
            },
        },
    };
}
