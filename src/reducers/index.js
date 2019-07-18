import { combineReducers } from 'redux'

const forecast = (state = {
    weatherData:{}
}, action) => {
    const {payload} = action;
    switch(action.type) {
        case 'REQUEST_SUCCESS':
            return {
                ...state,
                weatherData: payload.data
            }
        break;
        case 'REQUEST_FAILURE':
            return {
                ...state,
                weatherData: {}
            }
        break;
        default:
            return state;
    }
};

const loader = (state= {isLoading: false}, action) => {
    switch(action.type) {
        case 'REQUEST_START':
            return {
                ...state,
                isLoading: true
            };
            break;
        case 'REQUEST_FAILURE':
        case 'REQUEST_SUCCESS':
                return {
                    ...state,
                    isLoading: false
                };
            break;
        default:
            return state;
    }
};

const errorMessage = (state = null, action) => {
    const {payload} = action;
    switch(action.type) {
        case 'REQUEST_FAILURE':
            return payload.message;
            break;
        case 'REQUEST_SUCCESS':
            return null;
            break;
        default:
            return state;
    }
}

export default combineReducers({
    forecast,
    loader,
    errorMessage
});
