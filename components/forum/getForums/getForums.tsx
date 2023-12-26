import styles from "components/forum/forum.module.css";
import AvatarSvg from "icons/svg/avatar.svg";
import {ForumsProps, GetForumsProps} from "interface/forum.props";
import React from "react";
import Link from "next/link";
const GetForums: React.FC<GetForumsProps> = ({ forumData }) =>{
    return(

            <Link className={styles.block}  key={forumData.id}  href={`forum/${forumData.id}`} >
                <div className={styles.avatar}>
                    <AvatarSvg/>

                </div>
                <div className={styles.text} >
                    {forumData.text}


                </div>


            </Link>

    )

}

export default GetForums;