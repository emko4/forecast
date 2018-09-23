import { combineReducers } from 'redux-immutable';

import translateReducer from '../services/translations/reducer';
import scenesReducer from '../scenes/reducers';

const rootReducer = combineReducers({
    translate: translateReducer,
    ui: scenesReducer,
});

export default rootReducer;
