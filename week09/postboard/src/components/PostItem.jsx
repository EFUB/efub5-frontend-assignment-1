import { Link } from "react-router-dom";


function PostItem ({post, onDelete}) {
    return(
        <>
            <Link to={`/posts/${post.postId}`}>
             {post.title}
            </Link>
            <button onClick={() => onDelete(post.postId)}>삭제</button>
        </>
    )
}

export default PostItem;