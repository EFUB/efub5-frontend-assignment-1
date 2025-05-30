import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
    name: "theme", //slice 이름 
    initialState: {isDark: false}, //상태의 초기값
    reducers: { // 상태를 바꾸는 함수들 
        toggleTheme: (state) => { //현재 isDark 값을 바꾸는 함수 
            state.isDark = !state.isDark 
        },
    },
});

export default themeSlice.reducer;
export const {toggleTheme} = themeSlice.actions; //toggleTheme 액션 생성자만 꺼내서 내보냄