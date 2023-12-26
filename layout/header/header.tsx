import styles from './header.module.css';
import SearchSvg from "icons/svg/search.svg";
import React, {useState} from "react";
import {Word} from "@/api/data/category.data";
import axios from "axios";
import SearchModal from "components/modal/search/SearchModal";
import searchModal from "components/modal/search/SearchModal";
const Header = () =>{

    const [searchResult, setSearchResult] = useState<Word[]>([])
    const [modal, setModal] = useState<boolean>(false)
    const [searchQuery, setSearchQuery] = useState<string>("");


    const HeaderOnChange =  (event: React.ChangeEvent<HTMLInputElement>) =>{
        setSearchQuery(event.target.value);
        console.log(searchQuery)

        if (event.target.value.trim() !== ""){
            setSearchResult([]);
            request();

        }




    };


    const request = async ()=>{
        try {
            const url = `https://7754b33ab6b78312.mokky.dev/words?text=*${searchQuery}`

            const response = await axios.get(url)

            setSearchResult(response.data)
            console.log(searchResult)
            setModal(true)

        }catch (err:any){
            setModal(true)
            setSearchResult([])

            console.log(err)

        }
    }

    return (
        <header className={styles.header}>
            <div className={styles.search}>
                <SearchSvg className={styles.SearchSvg}/>
                <input type="search" placeholder="Найти перевод..." className={styles.input} onChange={HeaderOnChange}/>
                {modal && (
                    <SearchModal word={searchResult} />
                )}

            </div>



        </header>
    )
}

export default Header;