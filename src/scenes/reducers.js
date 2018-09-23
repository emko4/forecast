import { combineReducers } from 'redux-immutable';

import autocompleteReducer from './Forecast/components/Search/components/Autocomplete/reducer';
import weatherReducer from './Forecast/components/Search/components/Weather/reducer';

const rootReducer = combineReducers({
    autocomplete: autocompleteReducer,
    weather: weatherReducer,
});

export default rootReducer;
