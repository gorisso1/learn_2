import CreateForum from "components/forum/createForum/createForum";
import styles from  "./forum.module.css";
import {ForumData} from "@/api/data/forum.data";
import GetForums from "components/forum/getForums/getForums";
import {useEffect, useState} from "react";
import {ForumProps} from "interface/forum.props";
import { v4 as uuidv4 } from 'uuid';

const ForumComponent = () =>{

    const [forumData, setForumData] = useState<ForumProps[]>([]);

    useEffect(() => {
        console.log("983498")
        // Восстановление данных из localStorage на клиенте
        if (typeof window !== 'undefined') {
            const storedData = localStorage.getItem('forumData');
            if (storedData) {
                setForumData(JSON.parse(storedData));
            } else {
                const newUuid: string = uuidv4();
                setForumData([{ id: newUuid, text: "Добрый день не подскажите как будет на Чеченском языке слово Игрушки?" }]);
            }
        }
    }, []); // Пустой массив зависимостей, чтобы useEffect выполнился только один раз при монтировании компонента

    useEffect(() => {
        // Сохранение данных в localStorage на клиенте
        if (typeof window !== 'undefined') {
            localStorage.setItem('forumData', JSON.stringify(forumData));
        }
    }, [forumData]);

    return(
        <div className={styles.container}>
            <CreateForum forumData={forumData} setForumData={setForumData}/>
            <div className={styles.get_forum_container}>
                {forumData && forumData.map((item)=>(
                    <GetForums  key={item.id}  forumData={item}/>
                ))}

            </div>


        </div>

    )

}


export default ForumComponent;