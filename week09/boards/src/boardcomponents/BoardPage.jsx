import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axiosInstance from '../api/axiosInstance';
import PostItem from '../postcomponents/PostItem';

const BoardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* padding: 10px; // 필요시 유지 */
`;


const BoardHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 500px;
  margin: 0 auto;
`;

const BoardTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-top: 5px;
`;

const BoardDescription = styled.p`
  font-size: 15px;
  color: grey;
  margin-top: 10px;
`;

const BoardBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 5px;
`;

const BoardBtn = styled.button`
  padding: 5px 10px;
  cursor: pointer;
`;

const BoardPostsContainer = styled.div`
  width: 500px;
  margin: 0 auto;
  padding-top: 10px;
`;

function BoardPage () {
  const { boardId } = useParams();
  const numericBoardId = Number(boardId);
  const navigate = useNavigate();
  const memberId = parseInt(localStorage.getItem('memberId'));
  const [boardInfo, setBoardInfo] = useState(null);
  const [boardPosts, setBoardPosts] = useState([]);

  useEffect(() => {
    if (!numericBoardId) return;
    axiosInstance.get(`/boards/${numericBoardId}`)
      .then(res => {
        setBoardInfo(res.data);
      })
      .catch(err => {
        console.error(err);
        setBoardInfo(null);
      });
  }, [numericBoardId]);

  useEffect(() => {
    if (!numericBoardId) return;
    axiosInstance.get(`/boards/${numericBoardId}/posts`)
      .then(res => {
        setBoardPosts(res.data);
      })
      .catch(err => {
        console.error(err);
        setBoardPosts([]);
      });
  }, [numericBoardId]);

  // 게시판 생성
  const handleCreateBoard = () => {
    const newBoard = {
      title: '새 게시판',
      description: '게시판 설명',
      notice: '공지사항 없음',
      ownerId: memberId
    };

    axiosInstance.post('/boards', newBoard)
      .then(res => {
        alert(`게시판이 생성되었습니다. boardId: ${res.data.boardId}`);
        navigate(`/boards/${res.data.boardId}`);
      })
      .catch(err => console.error(err));
  };

  // 게시판 수정
  const handleUpdateBoard = () => {
    if (!boardInfo) return;
    const updatedBoard = {
      title: prompt('새 제목을 입력하세요', boardInfo.title) || boardInfo.title,
      description: prompt('새 설명을 입력하세요', boardInfo.description) || boardInfo.description,
      notice: prompt('새 공지를 입력하세요', boardInfo.notice) || boardInfo.notice,
      ownerId: memberId
    };
    axiosInstance.put(`/boards/${numericBoardId}`, updatedBoard)
      .then(() => {
        alert('게시판이 수정되었습니다.');
        setBoardInfo(prev => ({ ...prev, ...updatedBoard }));
      })
      .catch(err => console.error(err));
  };

  // 게시판 삭제
  const handleDeleteBoard = () => {
    if (window.confirm('정말 이 게시판을 삭제하시겠습니까?')) {
      axiosInstance.delete(`/boards/${numericBoardId}`)
        .then(() => {
          alert('게시판이 삭제되었습니다.');
          navigate('/'); // 홈이나 게시판 목록으로 이동
        })
        .catch(err => console.error(err));
    }
  };

  // 데이터가 없을 때 로딩 메시지
  if (!boardInfo) {
    return <div>로딩 중...</div>;
  }

  return (
    <BoardContainer>
      <BoardHeaderContainer>
        <BoardTitle>{boardInfo.title}</BoardTitle>
        <BoardDescription>{boardInfo.description}</BoardDescription>
      </BoardHeaderContainer>

      <BoardBtnContainer>
        <BoardBtn onClick={handleCreateBoard}>+</BoardBtn>
        <BoardBtn onClick={handleUpdateBoard}>수정</BoardBtn>
        <BoardBtn onClick={handleDeleteBoard}>삭제</BoardBtn>
      </BoardBtnContainer>

      <BoardPostsContainer>
        {boardPosts.length === 0 ? (
          <div>게시글이 없습니다.</div>
        ) : (
          boardPosts.map(post => (
            <PostItem
              key={post.postId}
              postId={post.postId}
              postTitle={post.title}
              // 필요하다면 post.content, post.member 등 추가 전달 가능
            />
          ))
        )}
      </BoardPostsContainer>
    </BoardContainer>
  );
}

export default BoardPage;
