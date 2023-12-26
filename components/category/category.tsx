import styles from './category.module.css';
import {Category, CategoryData} from "@/api/data/category.data";
import Link from "next/link";
import {useEffect, useState} from "react";
import axios from "axios";

const Category = () =>{
    const [category, setCategory] = useState<Category[]>([])

    useEffect(() => {
        const url = "https://7754b33ab6b78312.mokky.dev/category"
        const request = async () =>{
            try {
                const response = await axios.get<Category[]>(url)
                setCategory(response.data)

            }catch (err:any){
                console.log(err)
            }
        }
        request();
    },[])

    return(
        <div className={styles.container}>
            <div className={styles.blocks}>
                {category && category.map((category) => (
                                  <Link data-category-name={category.name}  href={`/category/${category.id}`} className={styles.block} key={category.id} >
                                   </Link>
                ))}

                </div>

        </div>




    )
}


export default Category;