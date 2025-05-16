import React, {useEffect, useState} from "react";
import { getMovies } from "../api/movieApi";
import MovieList from '../components/MovieList';
import styled from "styled-components";

const Header = styled.div`
    display:flex;
    margin-bottom: 50px;
   
`
const Logo = styled.img`
    width: 100px;
`
const Main = styled.div`
`
const MainComment = styled.div`
    margin-bottom: 10px;
`


function Home () {
//movies: 영화 데이터 담을 상태값
//setMovies: 상태 업데이트하는 함수 
const [movies, setMovies] = useState([]); 


//페이지 로딩될 때 한번만 실행 -> API 요청해 리스트 가져오기 
useEffect(()=> {
    const fetchData = async () => {
        const result = await getMovies(); // API 호출 (응답 기다린 다음 다음줄로 넘어감)
        setMovies(result); // 받아온 데이터를 movies 상태에 저장 (새 영화 리스트가 보여짐) 
    };
    fetchData();
},[]);



//영화 리스트를 props로 전달 
return (
        <>
          <Header>
            <Logo src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"/>
          </Header>
          <Main>
            <MainComment>평점순 TOP 10 영화</MainComment>
            <div><MovieList movies={movies} /></div>
          </Main>
        </>
      );
}



export default Home;