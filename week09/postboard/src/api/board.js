import axios from "axios";

export const API = axios.create({
    baseURL: "/boards",

});
// 자주 쓰는 baseURL 인스턴스 만들어두기 

//서버에 데이터 보내는 post, put은 body에 data 넣어야 함 
export const getBoard = (boardId) => API.get(`/${boardId}`);
export const getAllBoards = () => API.get(`/`);
export const updateBoard = (boardId, data) => API.put(`/${boardId}`, data);
export const deleteBoard = (boardId) => API.delete(`/${boardId}`);
export const makeBoard = (data) => API.post(`/`, data);
export const getBoardPosts = (boardId) => API.get(`/${boardId}/posts`);