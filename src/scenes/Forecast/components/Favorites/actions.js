import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from './constants';

export function addToFavorites(location) {
    return {
        type: ADD_TO_FAVORITES,
        data: {
            location,
        },
    };
}

export function removeFromFavorites(locationId) {
    return {
        type: REMOVE_FROM_FAVORITES,
        data: {
            locationId,
        },
    };
}
