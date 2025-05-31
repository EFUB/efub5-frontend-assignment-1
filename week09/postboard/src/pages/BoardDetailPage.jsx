import { useEffect, useState } from "react";
import { getBoardPosts} from "../api/board";
import { useParams, Link } from "react-router-dom";
import { deletePost } from "../api/post";

function BoardDetailPage (){
    const {boardId} = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const result = await getBoardPosts(boardId);
            setPosts(result.data);
        };
        fetchPosts();
        }, [])

    return(
        <>
        {posts.map((post) => (
            <PostItem
                key={post.postId}
                post={post}
                onDelete={async(id) => {
                    //삭제 요청 후 목록에서 직접 지워주고, 상태 갱신해야 함   
                    await deletePost(id);
                    setPosts(posts.filter((p) => (p.postId != id)));
                }}
            />
        ))}
        <Link to={`/boards/${boardId}/create-post`}>글 작성</Link>
        <Link to={`/boards/edit/${boardId}`}>게시판 수정</Link>
        </>
    );
}

export default BoardDetailPage;