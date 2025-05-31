import { useParams, useNavigate } from "react-router-dom";
import { getPost, updatePost } from "../api/post";
import { useEffect, useState} from "react";


function EditPostPage (){
const {postId}= useParams()


const [postTitle, setpostTitle] = useState('');
const [postText, setpostText] = useState('');

useEffect(() => {
    const fetchPost = async () => {
        const post = await getPost(postId);

        //받아온 데이터를 상태에 넣음 
        setpostTitle(post.data.title);
        setpostText(post.data.content);
       
    }
    fetchPost();
},[postId])

const navigate = useNavigate();

return(
    <>
    <input
      value={postTitle}
      onChange={(e) => setpostTitle(e.target.value)}
      placeholder="게시글 제목"
    />
    <textarea
      value={postText}
      onChange={(e) => setpostText(e.target.value)}
      placeholder="게시글 내용"
    />
   
     <button
        onClick={async () => {
            await updatePost(postId, {
            title: postTitle,
            content: postText,
            });
            navigate(`/posts/${postId}`);
        }}
     >수정 완료</button>
    </>
);
};


export default EditPostPage;