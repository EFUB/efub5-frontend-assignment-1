
import axiosInstance from "./axiosInstance"; // 경로는 상황에 맞게 조정해줘!

// 게시판 하나 조회
export const getBoard = (boardId) =>
  axiosInstance.get(`/boards/${boardId}`);

// 게시판 전체 목록 조회
export const getAllBoards = () =>
  axiosInstance.get(`/boards`);

// 게시판 생성
export const makeBoard = (data) =>
  axiosInstance.post(`/boards`, data);

// 게시판 수정
export const updateBoard = (boardId, data) =>
  axiosInstance.put(`/boards/${boardId}`, data);

// 게시판 삭제
export const deleteBoard = (boardId) =>
  axiosInstance.delete(`/boards/${boardId}`);

// 게시판에 속한 게시글 목록 가져오기
export const getBoardPosts = (boardId) =>
  axiosInstance.get(`/boards/${boardId}/posts`);
