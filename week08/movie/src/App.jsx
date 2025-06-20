import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header from './components/Header';
import MovieList from './components/MovieList';
import ToggleButton from './components/ToggleButton';
import { useSelector, useDispatch } from 'react-redux';
import { setMovies } from './store/movieSlice';

const Wrapper = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
  transition: background-color 0.3s, color 0.3s;
  background-color: ${({ theme }) => theme === 'dark' ? '#333' : '#fff'};
  color: ${({ theme }) => theme === 'dark' ? '#fff' : '#000'};
`;

const MOVIE_API = import.meta.env.VITE_MOVIE_API;

function App () {
  const theme = useSelector((state) => state.theme);
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  // 영화 데이터 불러오기
  useEffect(() => {
    const getMovies = async () => {
      try {
        const result = await axios.get(`${ MOVIE_API }`);
        const movieList = result.data.data.movies;

         if (movieList) {
           dispatch(setMovies(movieList));
        } else {
          console.warn('영화가 존재하지 않습니다.');
         }
       } catch(err) {
        console.error(err);
       }
    };
    getMovies();
  }, [dispatch]);

  useEffect(() => {
    document.body.style.backgroundColor = theme === 'dark' ? '#333' : '#fff';
    document.body.style.color = theme === 'dark' ? '#fff' : '#000';
    document.body.style.transition = 'all 0.3s ease';
  }, [theme]);


  return(
    <>
      <Wrapper theme={theme}>
        <Header theme={theme} />
        <ToggleButton />
        <MovieList movies={ movies } theme={theme}/>
      </Wrapper>
    </>
  );
};

export default App;