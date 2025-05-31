import { useParams } from "react-router-dom";
import { likePost, deleteLike, getPost } from "../api/post";
import { useEffect, useState } from "react";

function PostDetailPage() {
  const { postId } = useParams();
  const [postInfo, setPostInfo] = useState(null);
  const [liked, setLiked] = useState(false);


  useEffect(() => {
    const fetchPost = async () => {
      const result = await getPost(postId);
      setPostInfo(result.data);
    };
    fetchPost();
  }, [postId]);

  const handleLike = async() => {
    if (liked) {
        await deleteLike(postId);
        setLiked(false);
    } else {
        await likePost(postId);
        setLiked(true)
    }
  }

  if (!postInfo) return <div>로딩 중...</div>;

  return (
    <>
      <h2>{postInfo.title}</h2>
      <p>{postInfo.content}</p>
      <button onClick={handleLike}>
       {liked ? '♥️ 좋아요 취소' : '🤍 좋아요'}
      </button>
      <Link to={`/posts/edit/${postId}`}>게시글 수정</Link>
    </>
    
  );
}

export default PostDetailPage;
