import axios from "axios";

export const API = axios.create({
    baseURL: "/posts",

});


export const getPost = (postId) => API.get(`/${postId}`);
export const updatePost = (postId, data) => API.put(`/${postId}`, data);
export const deletePost = (postId) => API.delete(`/${postId}`);
export const writePost = (data) => API.post(`/`, data);
export const likePost = (postId) => API.post(`/${postId}/hearts`);
export const deleteLike = (postId) => API.delete(`/${postId}/hearts`);