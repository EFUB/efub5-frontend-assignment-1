import axios from 'axios';

const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';
const POSTER_SIZE = 'w500';

export const searchMovieByTitle = async (title) => {
  if (!TMDB_API_KEY) {
      console.error(".env 파일에 REACT_APP_TMDB_API_KEY가 설정되지 않았습니다.");
      return null;
  }
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/search/movie`, {
      params: {
        api_key: TMDB_API_KEY,
        query: title,
        language: 'ko-KR',
      },
    });

    if (response.data.results && response.data.results.length > 0) {
      return response.data.results[0];
    } else {
      console.log(`TMDb에서 "${title}" 검색 결과가 없습니다.`);
      return null;
    }

  } catch (error) {
    console.error(`TMDb 영화 검색 중 오류 발생: ${title}`, error);
     if (error.response && error.response.data) {
        console.error("TMDb API Error Details:", error.response.data);
    }
    return null;
  }
};

export const getMovieDetailById = async (tmdbMovieId) => {
   if (!TMDB_API_KEY) {
      console.error(".env 파일에 REACT_APP_TMDB_API_KEY가 설정되지 않았습니다.");
      return null;
  }
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/${tmdbMovieId}`, {
      params: {
        api_key: TMDB_API_KEY,
        language: 'ko-KR',
      },
    });

    return response.data;

  } catch (error) {
    console.error(`TMDb 영화 상세 정보 조회 중 오류 발생: ${tmdbMovieId}`, error);
     if (error.response && error.response.data) {
        console.error("TMDb API Error Details:", error.response.data);
    }
    return null;
  }
};

export const getFullPosterUrl = (posterPath) => {
  if (posterPath) {
    return `${TMDB_IMAGE_BASE_URL}${POSTER_SIZE}${posterPath}`;
  }
  return null;
};
