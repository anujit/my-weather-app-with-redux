import apiUtils from '../utils/apiUtils';

export const fetchForecast = (city) => (dispatch) => {
    dispatch({type: 'REQUEST_START'});
    return apiUtils.fetchForecastData({city})
        .then((forecast) => {
            dispatch({type: 'REQUEST_SUCCESS', payload: {data:forecast}});
        }, (err) => {
            dispatch({type: 'REQUEST_FAILURE', payload:{
                message: 'Error in loading the weather data, try another city.'
            }})
        });
}
