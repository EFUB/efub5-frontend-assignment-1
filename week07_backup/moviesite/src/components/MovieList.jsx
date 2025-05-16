import React from 'react';
import MovieCard from './MovieCard';  // 영화 하나하나 보여줄 컴포넌트
import styled from 'styled-components';

const List = styled.div`
    display: flex; 
    flex-wrap: wrap;  /* 너무 넘치면 다음 줄로 감싸기 */
`

function MovieList({movies}){
    //movies는 배열
    //map 돌려서 영화 하나씩 렌더링 
    return(
        <List>
            {movies.map((movie)=>(
                <MovieCard movie={movie}/>
            ))}
        </List>
    )
};

export default MovieList;