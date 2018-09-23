import _ from 'lodash';
import { Record } from 'immutable';

import { SUCCESS, FAILED } from '../../../../../../services/api/constants';
import { SEARCH_REQUEST, SELECT_ITEM, RESET_SEARCH } from './constants';

const AutocompleteRecord = new Record({
    value: '',
    locations: [],
    open: false,
    selected: null,
});

export default (state = new AutocompleteRecord(), action = {}) => {
    switch (action.type) {
        case SEARCH_REQUEST: {
            const value = _.get(action, 'data.searchText', '');

            return state.set('value', value);
        }
        case `${SEARCH_REQUEST}_${SUCCESS}`: {
            const locations = _.get(action, 'payload.response.body', []);

            return state
                .set('locations', locations)
                .set('open', true);
        }
        case `${SEARCH_REQUEST}_${FAILED}`: {
            return state
                .set('locations', [])
                .set('open', false);
        }
        case SELECT_ITEM: {
            const item = _.get(action, 'data.item', null);

            return state
                .set('selected', item)
                .set('open', false);
        }
        case RESET_SEARCH: {
            return new AutocompleteRecord();
        }
        default:
            return state;
    }
};
