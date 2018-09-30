import { combineReducers } from 'redux-immutable';

import autocompleteReducer from './Forecast/components/Search/components/Autocomplete/reducer';
import favoritesReducer from './Forecast/components/Favorites/reducer';
import weatherReducer from './Forecast/components/Search/components/Weather/reducer';

const rootReducer = combineReducers({
    autocomplete: autocompleteReducer,
    favorites: favoritesReducer,
    weather: weatherReducer,
});

export default rootReducer;
