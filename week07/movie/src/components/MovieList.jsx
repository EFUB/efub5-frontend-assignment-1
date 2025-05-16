import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Movie = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 3px;
  padding: 20px;
`;

const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin: 20px;
  padding: 10px;
`

const MoviePoster = styled.img`
  display: block;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const MovieTitle = styled.p`
  display: block;
  color: white;
  width: 100%;
  margin: 10px;
  padding: 5px;
  text-align: center;
  font-size: 20px;
`;


function MovieList ({ movies }) {
  

  return (
    <MovieContainer>
      <Movie>
        {movies.map((movie) => (
          <div key={movie.id}>
            <MovieCard>
              <MoviePoster src={movie.large_cover_image} alt="영화 포스터" />
              <MovieTitle>{movie.title}</MovieTitle>
            </MovieCard>
          </div>
        ))}
      </Movie>
    </MovieContainer>
  );
};

export default MovieList;