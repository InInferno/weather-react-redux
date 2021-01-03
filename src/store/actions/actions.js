import {
    WEATHER_FETCH_DATA_TODAY_SUCCESS, 
    WEATHER_FETCH_DATA_WEEK_SUCCESS,
    WEATHER_FETCH_IS_START,
    WEATHER_FETCH_ERROR
} from './actionsTypes'

export function weatherDataTodaySuccess(today) {
    return {
        type: WEATHER_FETCH_DATA_TODAY_SUCCESS,
        today: today
    };
}

export function weatherDataWeekSuccess(week) {
    return {
        type: WEATHER_FETCH_DATA_WEEK_SUCCESS,
        week: week
    };
}

export function isFetchStart(boolean) {
    return { 
        type: WEATHER_FETCH_IS_START,
        isFetchStart: boolean
    };
}

export function isFetchError(error) {
    return { 
        type: WEATHER_FETCH_ERROR,
        isFetchError: error
    };
}
