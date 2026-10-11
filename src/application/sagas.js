import { all } from 'redux-saga/effects';

import apiSaga from '../services/api/saga';
import scenesSagas from '../scenes/sagas';
import translationsSaga from '../services/translations/saga';

/**
 * Root generator for all application sagas
 */
export default function* () {
    yield all([
        apiSaga(),
        scenesSagas(),
        translationsSaga(),
    ]);
}
