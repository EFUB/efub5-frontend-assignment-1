import axios from 'axios';

const BASE_URL = 'https://yts.mx/api/v2'; // 공통된 API URL 부분 

export const getMovies = async () => { // 영화 리스트를 가져오는 비동기 함수 
    try{
        const response = await axios.get(`${BASE_URL}/list_movies.json`,{
            params: {
                sort_by: 'rating',
                limit: 10,
            }
        });

        //전체 데이터 중 영화 리스트 리턴 
        return response.data.data.movies;

    }catch (error) {
        console.error('데이터 불러오는 중 오류 발생: ', error);
    }
   
}