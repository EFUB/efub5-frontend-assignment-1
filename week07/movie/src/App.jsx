import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header from './components/Header';
import MovieList from './components/MovieList';

const Wrapper = styled.div`
  background-color: black;
  min-height: 100vh;
  color: white;
  overflow-x: hidden;
`;

function App () {

  const [movies, setMovies] = useState([]);

    // 영화 데이터 불러오기 
    useEffect(() => {
      const getMovies = async () => {
        try {
          const result = await axios.get("https://yts-proxy.now.sh/list_movies.json");
          const movieList = result.data.data.movies;
  
          if (movieList) {
            setMovies(movieList);
            console.log(movieList);
          } else {
            console.warn('영화가 존재하지 않습니다.');
          }
        } catch(err) {
          console.error(err);
        }
      };
  
      getMovies();
    }, []);

  return(
    <>
      <Wrapper>
        <Header />
        <MovieList movies={ movies } />
      </Wrapper>
    </>
  );
};

export default App;