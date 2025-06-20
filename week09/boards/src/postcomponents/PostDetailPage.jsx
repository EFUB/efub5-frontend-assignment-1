// 게시글 단일 조회 페이지
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import axiosInstance from '../api/axiosInstance';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const PostDetailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background: #fff;
`;

const PostHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PostBoard = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  color: lightgrey;
`;

const PostBtnContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const PostBtn = styled.button`
  padding: 4px 8px;
  cursor: pointer;
`;

const PostDetailContent = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 10px;
`;

const PostTitle = styled.h2`
  padding-bottom: 5px;
  font-size: 18px;
  border-bottom: 1px solid lightgrey;
`;

const PostContnet = styled.p`
  font-size: 14px;
`;

const PostFooter = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: flex-end;
`;

const LikeBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 22px;
`;

function PostDetailPage () {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [postInfo, setPostInfo] = useState({});
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(true);

  const memberId = parseInt(localStorage.getItem('memberId'));

  useEffect(() => {
    axiosInstance.get(`/posts/${postId}`)
    .then(res => {
      setPostInfo(res.data);
      setLoading(false);
    })
    .catch(err => console.error(err));
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/posts/${postId}`);
      alert('게시글이 삭제되었습니다.');
      navigate('/allpost');
    } catch(err) {
      console.error(err);
      alert('삭제 실패');
    }
  };

  const handleUpdate = async () => {
    const newTitle = prompt('새 제목을 입력하세요', postInfo.title);
    const newContent = prompt('새 내용을 입력하세요', postInfo.content);
    if (newTitle && newContent) {
      try {
        await axiosInstance.put(`/posts/${postId}`, {
          title: newTitle,
          content: newContent,
        });
        setPostInfo({...postInfo, title: newTitle, content: newContent});
        alert('수정 완료');
      } catch (err) {
        console.error(err);
        alert('수정 실패');
      }
    }
  };

  const handleToggleLike = async () => {
    try {
      if (liked) {
        await axiosInstance.delete(`/posts/${postId}/hearts?memberId=${memberId}`);
      } else {
        await axiosInstance.post(`/posts/${postId}/hearts`, { memberId });
      }
      setLiked(!liked);
    } catch (err) {
      console.error(err);
      alert('좋아요 처리 실패');
    }
  };

  if (loading) return <div>로딩 중...</div>;

  return (
    <PostDetailContainer>
      <PostHeader>
        <PostBoard to={`/boards/${postInfo.board.boardId}`}>{postInfo.board.title}</PostBoard>
        <PostBtnContainer>
          <PostBtn onClick={handleUpdate}>수정</PostBtn>
          <PostBtn onClick={handleDelete}>삭제</PostBtn>
        </PostBtnContainer>
      </PostHeader>
      <PostDetailContent>
        <PostTitle>{postInfo.title}</PostTitle>
        <PostContnet>{postInfo.content}</PostContnet>
      </PostDetailContent>
      <PostFooter>
        <LikeBtn onClick={handleToggleLike}>
          {liked ? <AiFillHeart color="red" /> : <AiOutlineHeart />}
        </LikeBtn>
      </PostFooter>
    </PostDetailContainer>
  );
}

export default PostDetailPage;