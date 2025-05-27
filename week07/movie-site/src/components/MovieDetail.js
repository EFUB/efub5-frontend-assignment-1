import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieDetail } from '../api/movies';

import styled from 'styled-components';

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const PosterImage = styled.img`
  width: 300px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const MovieTitle = styled.h1`
  font-size: 2.5em;
  color: #333;
  margin-bottom: 15px;
  text-align: center;
`;

const MovieInfo = styled.p`
  font-size: 1.2em;
  color: #555;
  margin-bottom: 10px;
  text-align: center;
`;

const MovieDescription = styled.p`
  font-size: 1em;
  color: #666;
  line-height: 1.6;
  margin-top: 20px;
  text-align: justify;
`;

const InfoMessage = styled.div`
  font-size: 20px;
  text-align: center;
  margin-top: 50px;
  color: ${props => props.error ? 'red' : '#333'};
`;


function MovieDetail() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovieDetail = async () => {
      try {
        setLoading(true);
        setError(null);

        const detailData = await fetchMovieDetail(id);

        const movieData = detailData?.data?.movie || detailData;

        setMovie(movieData);

      } catch (err) {
        console.error(`영화 ID ${id} 상세 정보를 가져오는 중 오류 발생:`, err);
        setError("영화 상세 정보를 불러오는데 실패했습니다.");
        setMovie(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      getMovieDetail();
    } else {
      setLoading(false);
      setError("유효한 영화 정보가 없습니다.");
    }


  }, [id]);

  if (loading) {
    return <InfoMessage>상세 정보 로딩 중...</InfoMessage>;
  }

  if (error) {
    return <InfoMessage error>{error}</InfoMessage>;
  }

  if (!movie) {
      return <InfoMessage>영화 정보를 찾을 수 없습니다.</InfoMessage>;
  }

  return (
    <DetailContainer>
      {movie.large_cover_image && (
           <PosterImage src={movie.large_cover_image} alt={movie.title} />
      )}

      <MovieTitle>{movie.title}</MovieTitle>

      {movie.year && <MovieInfo>개봉 연도: {movie.year}</MovieInfo>}
      {movie.rating && <MovieInfo>평점: {movie.rating}</MovieInfo>}

      {movie.description_full && <MovieDescription>{movie.description_full}</MovieDescription>}
    </DetailContainer>
  );
}

export default MovieDetail;
