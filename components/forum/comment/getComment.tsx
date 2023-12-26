import styles from  "components/forum/forum.module.css";
import React from "react";
import {GetCommentProps, GetForumsProps} from "interface/forum.props";
import Link from "next/link";
import AvatarSvg from "icons/svg/avatar.svg";

const GetComment: React.FC<GetCommentProps> = ({CommentData})=>{

    return(
        <div className={styles.block}  key={CommentData.id}  >
            <div className={styles.avatar}>
                <AvatarSvg/>

            </div>
            <div className={styles.text} >
                {CommentData.text}


            </div>


        </div>
    )

}

export default GetComment;