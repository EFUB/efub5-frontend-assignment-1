

import axios from 'axios';

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

const BASE_URL = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest';

export const fetchMovies = async () => {
  try {
    const endpoint = '/boxoffice/searchDailyBoxOfficeList.json';
    const targetDt = '20240521';

    const response = await axios.get(`${BASE_URL}${endpoint}`, {
      params: {
        key: API_KEY,
        targetDt: targetDt,
      }
    });

    return response.data;
  } catch (error) {
    console.error("영화 데이터를 가져오는 중 오류 발생:", error);
    if (error.response && error.response.data) {
        console.error("API Error Details:", error.response.data);
    }
    throw error;
  }
};

export const fetchMovieDetail = async (movieId) => {
  try {
    const detailEndpoint = '/movie/searchMovieInfo.json';

    const response = await axios.get(`${BASE_URL}${detailEndpoint}`, {
      params: {
        key: API_KEY,
        movieCd: movieId,
      }
    });

    return response.data;

  } catch (error) {
    console.error(`영화 ID ${movieId} 상세 정보를 가져오는 중 오류 발생:`, error);
    if (error.response && error.response.data) {
        console.error("API Error Details:", error.response.data);
    }
    throw error;
  }
};
