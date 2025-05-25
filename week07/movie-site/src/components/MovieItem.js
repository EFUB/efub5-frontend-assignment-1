import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const MovieItemContainer = styled.div`
  width: 200px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  background-color: #fff;
  padding-bottom: 15px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const PosterImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const MovieTitle = styled.h3`
  font-size: 1.1em;
  color: #333;
  margin: 0 10px 5px 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MovieInfo = styled.p`
  font-size: 0.9em;
  color: #666;
  margin: 0 10px 5px 10px;
`;


function MovieItem({ movie }) {
  const title = movie.movieNm;
  const movieCode = movie.movieCd;

  const posterUrl = movie.posterUrl;

  return (
    <MovieItemContainer>
      {posterUrl ? (
        <PosterImage src={posterUrl} alt={title} />
      ) : (
        <div style={{ width: '100%', height: '280px', backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p>포스터 없음</p>
        </div>
      )}

      <MovieTitle>{title}</MovieTitle>

      {movie.rank && <MovieInfo>순위: {movie.rank}</MovieInfo>}

    </MovieItemContainer>
  );
}

export default MovieItem;
