import { useState } from "react";
import { writePost } from "../api/post";
import { useParams, useNavigate } from "react-router-dom";

function CreatePostPage() {
  const [postTitle, setPostTitle] = useState('');
  const [postText, setPostText] = useState('');
  const { boardId } = useParams(); // 현재 게시판 ID 가져옴
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const result = await writePost({
      title: postTitle,
      content: postText,
      boardId: parseInt(boardId), // 문자열이면 정수로 변환
    });

    const newPostId = result.data.postId;
    navigate(`/posts/${newPostId}`); // 작성 완료 후 해당 게시글로 이동
  };

  return (
    <>
      <input
        value={postTitle}
        onChange={(e) => setPostTitle(e.target.value)}
        placeholder="게시글 제목"
      />
      <textarea
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
        placeholder="게시글 내용"
      />
      <button onClick={handleSubmit}>게시글 작성</button>
    </>
  );
}

export default CreatePostPage;
