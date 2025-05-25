import React, { useEffect, useState } from 'react';
import { fetchMovies } from '../api/movies';

import MovieItem from './MovieItem';

import styled from 'styled-components';

const MovieListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 20px auto;
`;

const LoadingMessage = styled.div`
  font-size: 20px;
  text-align: center;
  margin-top: 50px;
`;

const ErrorMessage = styled.div`
  font-size: 20px;
  color: red;
  text-align: center;
  margin-top: 50px;
`;


function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchMovies();

        const movieList = data?.boxOfficeResult?.dailyBoxOfficeList || [];

        console.log('API 응답 원본 데이터:', data);
        console.log('추출된 영화 목록 배열:', movieList);

        setMovies(movieList);

      } catch (err) {
        console.error("영화 데이터를 가져오는 중 오류 발생:", err);
        if (err.response && err.response.data) {
            console.error("API Error Details:", err.response.data);
        }
        setError("영화를 불러오는데 실패했습니다. 다시 시도해주세요.");
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    getMovies();

  }, []);

  if (loading) {
    return <LoadingMessage>로딩 중...</LoadingMessage>;
  }

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  if (!loading && !error && movies.length === 0) {
      return <LoadingMessage>표시할 영화가 없습니다.</LoadingMessage>;
  }

  return (
    <MovieListContainer>
      {movies.map(movie => (
        <MovieItem key={movie.movieCd} movie={movie} />
      ))}
    </MovieListContainer>
  );
}

export default MovieList;
