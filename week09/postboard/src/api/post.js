import axiosInstance from "./axiosInstance"; // 경로는 필요에 따라 조정

// 게시글 하나 조회
export const getPost = (postId) =>
  axiosInstance.get(`/posts/${postId}`);

// 게시글 수정
export const updatePost = (postId, data) =>
  axiosInstance.put(`/posts/${postId}`, data);

// 게시글 삭제
export const deletePost = (postId) =>
  axiosInstance.delete(`/posts/${postId}`);

// 게시글 작성
export const writePost = (data) =>
  axiosInstance.post(`/posts`, data);

// 게시글 좋아요
export const likePost = (postId) =>
  axiosInstance.post(`/posts/${postId}/hearts`);

// 게시글 좋아요 취소
export const deleteLike = (postId) =>
  axiosInstance.delete(`/posts/${postId}/hearts`);