import { SEARCH_REQUEST, SELECT_ITEM, RESET_SEARCH } from './constants';

import config from '../../../../../../config';

export function searchRequest(searchText) {
    return {
        type: SEARCH_REQUEST,
        payload: {
            ...config.api.search,
            qs: {
                ...config.api.search.qs,
                q: searchText,
            },
        },
        data: {
            searchText,
        },
        meta: {
            debounce: {
                delay: 250,
            },
        },
    };
}

export function selectItem(item) {
    return {
        type: SELECT_ITEM,
        data: {
            item,
        },
    };
}

export function resetSearch() {
    return {
        type: RESET_SEARCH,
    };
}
