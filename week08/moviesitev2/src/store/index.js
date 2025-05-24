import {configureStore} from '@reduxjs/toolkit';
import themeReducer from "./themeSlice"; //슬라이스 가져오기 

export const store = configureStore({
    reducer: {
        theme: themeReducer, // store에 theme이라는 이름의 상태 묶음을 등록 
    }
})