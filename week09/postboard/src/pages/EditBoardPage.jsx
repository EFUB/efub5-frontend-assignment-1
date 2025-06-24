import { useParams, useNavigate } from "react-router-dom";
import { getBoard, updateBoard } from "../api/board";
import { useEffect, useState} from "react";


function EditBoardPage (){
const {boardId}= useParams()


const [boardTitle, setboardTitle] = useState('');
const [boardText, setboardText] = useState('');
const [boardNotice, setboardNotice] = useState('');

useEffect(() => {
    //컴포넌트가 로딩되면 getBoard 실행 
    const fetchBoard = async () => {
        const board = await getBoard(boardId);

        //받아온 데이터를 상태에 넣음 
        setboardTitle(board.data.title);
        setboardText(board.data.description);
        setboardNotice(board.data.notice);
    }
    fetchBoard();
},[boardId])

const navigate = useNavigate();

return(
    <>
    <input
      value={boardTitle}
      onChange={(e) => setboardTitle(e.target.value)}
      placeholder="게시판 제목"
    />
    <textarea
      value={boardText}
      onChange={(e) => setboardText(e.target.value)}
      placeholder="게시판 설명"
    />
    <textarea
      value={boardNotice}
      onChange={(e) => setboardNotice(e.target.value)}
      placeholder="게시판 공지"
    />
     <button
        onClick={async () => {
            await updateBoard(boardId, {
            title: boardTitle,
            description: boardText,
            notice: boardNotice,
            });
            navigate(`/boards/${boardId}`);
        }}
     >수정 완료</button>
    </>
);
};


export default EditBoardPage;