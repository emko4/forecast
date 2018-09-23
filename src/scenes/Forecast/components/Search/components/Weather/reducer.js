import _ from 'lodash';
import { Record } from 'immutable';

import { SUCCESS, FAILED } from '../../../../../../services/api/constants';
import { FORECAST_REQUEST } from './constants';

const WeatherRecord = new Record({
    loading: false,
    forecast: {},
});

export default (state = new WeatherRecord(), action = {}) => {
    switch (action.type) {
        case FORECAST_REQUEST: {
            return state.set('loading', true);
        }
        case `${FORECAST_REQUEST}_${SUCCESS}`: {
            const forecast = _.get(action, 'payload.response.body', []);

            return state
                .set('forecast', forecast)
                .set('loading', false);
        }
        case `${FORECAST_REQUEST}_${FAILED}`: {
            return state
                .set('forecast', {})
                .set('loading', false);
        }
        default:
            return state;
    }
};
