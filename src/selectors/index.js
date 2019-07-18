import {createSelector} from 'reselect';

const stateSelector = state => state;

const getIsLoading = ([stateSelector], (state) => {
    return state.loader.isLoading;
})

const getForecast = ([stateSelector], (state) => {
    const {forecast} = state;
    const {weatherData} = forecast;
    const {list = []} = weatherData;
    const upcomingDays = list.map((day) => {
        const {main, weather, dt_txt} = day;
        const {temp, temp_min, temp_max} = main;
        return {
            weather,
            temp,
            temp_min,
            temp_max,
            dt_txt
        }
    });
    return upcomingDays;
})

const getCityName = createSelector([stateSelector], (state) => {
    const {forecast} = state;    
    const {weatherData} = forecast;
    return weatherData.city ? weatherData.city.name : '';
});

const getErrorMessage = createSelector([stateSelector], (state) => {
    return state.errorMessage;
});

export {
    getIsLoading,
    getForecast,
    getCityName,
    getErrorMessage
}