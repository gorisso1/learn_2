import React, {useEffect, useState} from "react";
import {CommentComponentProps, CommentCreate} from "interface/forum.props";
import { v4 as uuidv4 } from 'uuid';
import Create_comment from "components/forum/comment/create_comment";
import styles from "components/forum/forum.module.css";
import GetForums from "components/forum/getForums/getForums";
import GetComment from "components/forum/comment/getComment";
const CommentComponent: React.FC<CommentComponentProps>  = ({id}) =>{
    const [comment, setComment] = useState<CommentCreate[]>(() => {
        if (typeof window !== 'undefined') {
            const storedData = localStorage.getItem('CommentData');
            const newUuid: string = uuidv4();
            return storedData ? JSON.parse(storedData) : [];
        } else {
            return [];
        }
    });



    const [formData, setFormData] = useState<any[]>(() => {
        // Получаем данные из localStorage для массива formData
        const storedData = localStorage.getItem("forumData");
        return storedData ? JSON.parse(storedData) : [];
    });


    const selectedFormData = formData.find((item) => item.id === id);
    console.log(formData)



    useEffect(() => {

        localStorage.setItem('CommentData', JSON.stringify(comment));

    }, [comment]);
    return(
        <div>
            <div className={styles.text_comment}>{selectedFormData?.text}</div>

            <Create_comment id={id} setCommentData={setComment} CommentData={comment}/>


            <div className={styles.get_forum_container}>
                {comment && comment.map((item) => (
                    item.text !== '' && (
                        <GetComment key={item.id} CommentData={item} />
                    )
                ))}
            </div>


        </div>
    )

}

export default CommentComponent;