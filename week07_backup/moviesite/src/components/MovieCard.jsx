import React from "react";
import {Link} from 'react-router-dom';
import styled from "styled-components";

const MovieWrapper = styled.div`
    padding: 10px;
    transition: transform 0.2s ease-in-out;
    :hover {
    transform: scale(1.1);
    }
`;

const MovieImg = styled.img`
    width: 150px;
`;

function MovieCard({movie}){
    return(
         // 포스터 클릭시 링크로 이동, props(state)로 movie 전체 넘겨줌 
        <MovieWrapper>
          <Link to={`/movie/${movie.id}`} state={{movie}}>
            <MovieImg src={movie.medium_cover_image} alt={movie.title} />
          </Link>
       </MovieWrapper>
    );
}



export default MovieCard;