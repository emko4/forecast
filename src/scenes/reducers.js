import { combineReducers } from 'redux-immutable';
import { Map } from 'immutable';

const rootReducer = combineReducers({
    init: (state = Map()) => (state),
});

export default rootReducer;
