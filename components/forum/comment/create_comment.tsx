import styles from "components/forum/forumComponent";
import React, {useState} from "react";
import {CommentComponentProps, CommentDataCreate} from "interface/forum.props";
import { v4 as uuidv4 } from 'uuid';
const Create_comment: React.FC<CommentDataCreate> = ({CommentData,setCommentData,id}) =>{
    const [valueComment,setComment] = useState<string>("")

    const OnChangeComment = (event:React.ChangeEvent<HTMLInputElement>)=>{
        const target =  event.target.value
        setComment(target)
    }

    const submitComment = ()=>{
        if (valueComment.trim()!=''){
            const newUuid: string = uuidv4();
            const newForumData = [
                ...CommentData,
                {
                    id: newUuid,
                    forum_id:id,
                    text: valueComment,
                }
            ];
            setCommentData(newForumData);
            localStorage.setItem('CommentData', JSON.stringify(newForumData));
            setComment('');

        }
    }

    return(
        <div >
            <input type="text"  onChange={OnChangeComment}/>
            <div  onClick={submitComment}>Отправить</div>


        </div>
    )

}

export default Create_comment;