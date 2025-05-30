import React from "react";
import {useLocation} from 'react-router-dom';
import styled from "styled-components";

const MovieImg = styled.img`
    width: 300px;
`
const Container = styled.div`
    display:flex;
    gap: 20px;
    align-items: center;
    margin-top: 100px;
    justify-content: center;
    
`
const DetailLeft = styled.div`
    
`
const DetailRight = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`
const MovieTitle = styled.p`
    font-size: 50px;
    font-weight: bold;
`

const Description = styled.p`
    font-size: 20px;
`

function MovieDetail(){
    //MovieCard에서 넘긴 state 받아오기 
    const location = useLocation();
    const movie = location.state.movie;
    console.log(movie);
    return(
        <Container>
            <DetailLeft>
                <MovieImg src={movie.large_cover_image} alt={movie.title}/>
            </DetailLeft>
            <DetailRight>
                <MovieTitle>{movie.title}</MovieTitle>
                <Description>{movie.year} / {movie.runtime}min.</Description>
            </DetailRight>
        </Container>
       
       
    );
}

export default MovieDetail;