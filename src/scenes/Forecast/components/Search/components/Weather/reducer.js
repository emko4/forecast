import _ from 'lodash';
import { Record } from 'immutable';

import { SUCCESS, FAILED } from '../../../../../../services/api/constants';
import { FORECAST_REQUEST } from './constants';

const WeatherRecord = new Record({
    loading: false,
    forecast: {},
    locale: null,
});

export default (state = new WeatherRecord(), action = {}) => {
    switch (action.type) {
        case FORECAST_REQUEST: {
            return state.set('loading', true);
        }
        case `${FORECAST_REQUEST}_${SUCCESS}`: {
            const forecast = _.get(action, 'payload.response.body', []);
            const locale = _.get(action, 'payload.originAction.payload.qs.lang', null);

            return state
                .set('forecast', forecast)
                .set('locale', locale)
                .set('loading', false);
        }
        case `${FORECAST_REQUEST}_${FAILED}`: {
            return new WeatherRecord();
        }
        default:
            return state;
    }
};
