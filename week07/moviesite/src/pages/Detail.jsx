import React from "react";
import MovieDetail from '../components/MovieDetail';
import {useParams} from 'react-router-dom';
//URL 안에 있는 변수 값을 꺼내주는 함수 

function Detail(){
    const {id} = useParams();

    return(
        <div>
            <MovieDetail id = {id} />
        </div>
    )
}



export default Detail;