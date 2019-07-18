import React, { Component } from 'react';
import ForecastList from './ForecastList';
import CitySearch from './CitySearch';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import {appTitle} from '../utils/messages';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchText: ''
    }
  }

  handleSearch = (e) => {
    this.setState({
      searchText: e.target.value
    });
  }

  searchWeather = (e) => {
    e.preventDefault();
    const {searchText} = this.state;
    const {fetchForecast} = this.props;
    fetchForecast(searchText)
    .catch((err) => console.log(err));
  }

  render() {
    const {isLoading, city, forecast, errorMessage} = this.props;
    const {searchText} = this.state;

    return (
      <div className="weather-app-wrapper container">
        <h1>{appTitle}</h1>
        <CitySearch
          handleSearch={this.handleSearch}
          searchWeather={this.searchWeather}
          searchText={searchText}
        />      
        {isLoading ? <Loader /> : ''}
        {errorMessage ? <ErrorMessage message={errorMessage} /> : ''}
        <ForecastList
          cityName={city}
          forecast={forecast}
        />
      </div>
    );
  }
}

export default App;
