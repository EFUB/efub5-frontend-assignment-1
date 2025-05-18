import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import WeatherBox from './WeatherBox';
import styled from 'styled-components';

const WeatherStyle = styled.div`
  * {
    box-sizing: border-box;
  }

  .weather-container {
    text-align: center;
  }

  .container {
    display: flex;
    flex-direction: column;
    min-height: 100px;
    justify-content: center;
    align-items: center;
    padding: 1px 5px;
    text-align: center;
  }

  .todolist {
    color: #3d3b40;
  }
`;

const API_KEY = import.meta.env.VITE_WEATHER_API;

function Weather() {
  const [weather, setWeather] = useState(null);
  console.log(API_KEY);

  // 현재 위치를 가져오는 함수
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log(lat, lon);
      getWeather(lat, lon);
    });
  }, []);

  // weather api 호출
  const getWeather = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setWeather(data);
  };

  return (
    <>
      <WeatherStyle>
        <div className="weather-container">
          <div className="container">
            <WeatherBox weather={weather} />
          </div>
          <div className="back-todolist">
            <Link to="/"><p className="todolist">todolist로 돌아가기</p></Link>
          </div>
        </div>
      </WeatherStyle>
    </>
  );
}

export default Weather;