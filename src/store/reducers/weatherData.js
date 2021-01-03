import initialState from '../initialState';
import { 
    WEATHER_FETCH_DATA_TODAY_SUCCESS, 
    WEATHER_FETCH_DATA_WEEK_SUCCESS,
    WEATHER_FETCH_IS_START,
    WEATHER_FETCH_ERROR
} from '../actions/actionsTypes';

export function weatherData(state = initialState, action) {
    switch(action.type) {
        case WEATHER_FETCH_DATA_TODAY_SUCCESS: 
        return {
            ...state,
            today: action.today
        };
        case WEATHER_FETCH_DATA_WEEK_SUCCESS: 
        return {
            ...state,
            week: action.week 
        };
        case WEATHER_FETCH_IS_START: 
        return {
            ...state,
            isFetchStart: action.isFetchStart 
        };
        case WEATHER_FETCH_ERROR: 
        return {
            ...state,
            isFetchError: action.isFetchError
        };
        
        default: return state;
    }
}
