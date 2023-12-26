import { useRouter } from 'next/router';
import {Word, Words} from "@/api/data/category.data";
import Layout from "layout/layout";
import {useEffect, useState} from "react";
import axios from "axios";

import styles from "./CategoryPage.module.css";
import {string} from "prop-types";

const CategoryPage = () =>{

    const [words, setWords]  = useState<Word[]>([])

    const router = useRouter();
    const { id } = router.query;

    useEffect(()=>{
        const request = async () =>{
            try{
                const url = "https://7754b33ab6b78312.mokky.dev/words"
                const response = await axios.get(url)
                setWords(response.data)
            }catch (err:any){
                console.log(err)
            }
        }
        request();
    },[])

    const categoryId = id ? parseInt(id as string, 10) : null;
    const filteredWords = categoryId ? words.filter((word) => word.category_id === categoryId) : [];
    return(

        <Layout>

        <div>
            <div className={styles.wrapper}>

            {filteredWords.map((word) =>(
                        <div className={styles.block} key={word.id}>

                              <div className={styles.text}> {word.text}</div>
                              <div className={styles.line}></div>
                              <div className={styles.translation}> {word.translation}</div>
                        </div>
            ))}
            </div>


        </div>
        </Layout>
    )

}

export default CategoryPage;