import styles from 'components/forum/forum.module.css';
import React, {useEffect, useState} from "react";
import {ForumData} from "@/api/data/forum.data";
import {ForumDataCreate, ForumProps, ForumsProps, GetForumsProps} from "interface/forum.props";
import { v4 as uuidv4 } from 'uuid';
const CreateForum: React.FC<ForumDataCreate> = ({ forumData, setForumData }) =>{
    const [valueForum, setValueForum] = useState<string>("")


    const submitForum = () => {
        const newUuid: string = uuidv4();
        if (valueForum.trim() !== '') {
            const newForumData = [
                ...forumData,
                {
                    id: newUuid,
                    text: valueForum,
                }
            ];
            setForumData(newForumData);
            localStorage.setItem('forumData', JSON.stringify(newForumData));
            setValueForum('');
        }
    }

    const onChangeForum = (event:React.ChangeEvent<HTMLInputElement>)=>{
        const target = event.target.value;
        setValueForum(target)
    }


    return(
        <div className={styles.container_create}>
            <input className={styles.input_forum} type="text" placeholder="Напишите свой вопрос" onChange={onChangeForum}/>
            <div className={styles.submitForum} onClick={submitForum}>Создать</div>

        </div>
    )

}

export  default CreateForum;