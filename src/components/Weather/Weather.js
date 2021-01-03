import React, { Component } from 'react';
import '../../images/icons/icons.css'
import './Weather.css';
import { connect } from "react-redux";
import { weatherFetchDataToday } from '../../store/actions/weather';

class Weather extends Component {

  getWeatherCity = (event) => {
    event.preventDefault();
    this.props.fetchData(`https://api.openweathermap.org/data/2.5/forecast?q=${this.searchInput.value}&appid=68973503f94a54422e17c88b2935ebce&lang=ru&units=metric`);
  }


  render() {

    const optionsDate = {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    }

    return (
      <div className='weather-container'>
        <h1 className='title'>Погода</h1>       
        <form className='search-form' onSubmit={ this.getWeatherCity }>
          <label className='search-title'>
            Введите название населённого пункта:
          </label>
          <div className='search-field'>
            <input className='search-input' type="text" ref={(input) => {this.searchInput = input}} />
            <button className='search-button' type="submit">Отправить</button>
          </div>
        </form>

        {(this.props.isFetchStart) &&
          <div className='preloader'></div>
        }

        {(this.props.isFetchError) &&
          <h1 className='error-block'>{this.props.isFetchError}</h1>
        }
        
        {(this.props.today && this.props.week) &&
          (
          <div className="weather-info">
            <div className='weather-card-now'>
              <p className='weather-card-now__title'>Погода сейчас:</p>
              
              <p className='weather-card-now__text'>
                {Math.round(this.props.today.main.temp)}°, 
                ощущается как {Math.round(this.props.today.main.feels_like)}°
              </p>
              <div className={`wi wi-100 icon-${this.props.today.weather[0].icon}`}></div>
              <p className='weather-card-now__text'>{this.props.today.weather[0].description}</p>
              <p className='weather-card-now__text'>Ветер: {this.props.today.wind.speed} м/с, 
              Влажность: {this.props.today.main.humidity}%, 
              Давление: {this.props.today.main.pressure} мм рт. ст.
              </p>
            </div>
            <ul className='weather-cards-week'>
              {this.props.week.map((day, index)=> {
                return <li className='weather-card-week' key={index}>
                  <p className='weather-card-week__title'>
                    {new Date(day.dt_txt).toLocaleString('ru', optionsDate)}
                  </p>
                  <p className='weather-card-week__text'>Температура: {Math.round(day.main.temp)}° </p>
                  <p className='weather-card-week__text'>Ощущается как: {Math.round(day.main.feels_like)}°</p>

                  <div className={`wi wi-100 icon-${day.weather[0].icon}`}></div>
                  <p className='weather-card-week__text'>{day.weather[0].description}</p>
                  <p className='weather-card-week__text'>Ветер: {day.wind.speed} м/с</p>
                  <p className='weather-card-week__text'>Влажность: {day.main.humidity}%</p>
                  <p className='weather-card-week__text'>Давление: {day.main.pressure} мм рт. ст.</p>
                </li>
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(weatherFetchDataToday(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
