import * as Actions from '../Actions';

export const city = (state = {}, action) => {
    switch(action.type){
        case Actions.SET_CITY:
            return action.payload;
        default:
            return state;
    }
};