import { 
    weatherDataTodaySuccess,
    weatherDataWeekSuccess,
    isFetchStart,
    isFetchError
} from './actions'
import errorHandler from '../../utils/errorHandler'

export function weatherFetchDataToday(url) { 
    return (dispatch) => {
        dispatch(isFetchStart(true))
        dispatch(isFetchError(null))
        fetch(url)
            .then(res => {
                dispatch(weatherDataTodaySuccess(null))
                dispatch(weatherDataWeekSuccess(null))
                if (res.status !== 200) {
                    throw new Error(res.status)
                }
                return res.json()
            })
            .then(weatherData => {
                dispatch(weatherDataTodaySuccess(weatherData.list[0]))
                dispatch(weatherDataWeekSuccess(
                    weatherData.list.filter(day => 
                        day.dt_txt.includes("12:00:00"))
                        )
                    )
            })
            .finally(weatherData => {
                dispatch(isFetchStart(false))
            })
            .catch((err) => {
                dispatch(isFetchError(errorHandler(err.message)))
            });
    }
}
