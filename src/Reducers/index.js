import { combineReducers } from 'redux';

import { city } from './city';
import { cities } from './cities';

const reducers = combineReducers({
    city,
    cities,
});

export default reducers;