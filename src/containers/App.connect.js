import {getIsLoading, getForecast, getCityName, getErrorMessage} from '../selectors';
import {connect} from 'react-redux';
import {fetchForecast} from '../actions';
import App from '../components/App';

const mapStateToProps = (state) => {
    return {
        errorMessage: getErrorMessage(state),
        isLoading: getIsLoading(state),
        forecast: getForecast(state),
        city: getCityName(state)
    }
  }
  
const mapDispatchToProps = (dispatch) => {
    return {
        fetchForecast: (city) => {
            return dispatch(fetchForecast(city));
        }
    }
}
  
  export default connect(mapStateToProps, mapDispatchToProps)(App);
  