import { Link } from "react-router-dom";


function BoardItem ({board, onDelete}) {
    return(
        <>
            <Link to={`/board/${board.boardId}`}>
              {board.title}
            </Link>
            <button onClick={() => onDelete(board.boardId)}>삭제</button>
        </>
    );
}



export default BoardItem;