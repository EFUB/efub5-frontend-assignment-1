import React from 'react';
import Weather from './Weather';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 200px;
`;


function WeatherBox({ weather }) {
  return (
    <Box>
        <div>Seoul</div>
        <h2>
          {Math.round(weather?.main.temp-273.15)}℃
        </h2>
        <h3>{weather?.weather[0].description}</h3>
    </Box>
  );
};

export default WeatherBox;