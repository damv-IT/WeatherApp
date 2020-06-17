import * as Actions from '../Actions';

export const city = (state = {}, action) => {
    switch(action.type){
        case Actions.SET_CITY:
            return {...state, city: action.payload};
        default:
            return state;
    }
};