import {createStore} from 'redux';

import {city} from '../Reducers/city';

const initialState = {
    city: 'Zapopan,mx',
};

export const store = createStore(city, initialState, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());