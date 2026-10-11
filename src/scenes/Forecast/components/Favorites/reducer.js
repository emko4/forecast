import _ from 'lodash';
import { Record } from 'immutable';

import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from './constants';

const FavoritesRecord = new Record({
    locations: [],
});

export default (state = new FavoritesRecord(), action = {}) => {
    switch (action.type) {
        case ADD_TO_FAVORITES: {
            const location = _.get(action, 'data.location', {});
            const isInFavorites = !!_.find(state.get('locations'), { id: _.get(location, 'id', null) });

            if (_.isEmpty(location) || isInFavorites) return state;

            return state.set('locations', [...state.get('locations'), location]);
        }
        case REMOVE_FROM_FAVORITES: {
            const locationId = _.get(action, 'data.locationId', null);

            return state.set('locations', _.filter(state.get('locations'), (location) => (location.id !== locationId)));
        }
        default:
            return state;
    }
};
