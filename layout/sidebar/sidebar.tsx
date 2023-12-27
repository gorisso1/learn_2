import styles from "./sidebar.module.css";
import HomeSvg from 'icons/svg/home.svg';
import GameSvg from "icons/svg/game.svg";
import AbcSvg from "icons/svg/abc.svg";
import ForumSvg from "icons/svg/forum.svg";
import NewsSvg from "icons/svg/news.svg";
import Link from "next/link";


const Sidebar = () =>{
    return(
        <div className={styles.sidebar}>
            <div className={styles.liner}>
            <div className={styles.navigation}>
                <div className={styles.item}>


                    <HomeSvg className={styles.svg}/>



                    <Link href={"/"} className={styles.name}>Главная</Link>

                </div>


                <div className={styles.item}>
                    <GameSvg className={styles.svg}/>
                    <Link href={"/game"} className={styles.name}>Игра</Link>



                </div>
                <div className={styles.item}>
                    <AbcSvg className={styles.svg}/>
                    <div className={styles.name}>Азбука</div>

                </div>
                <div className={styles.item}>
                    <ForumSvg className={styles.svg}/>

                    <Link href={"/forum"} className={styles.name}>Форум</Link>

                </div>
                <div className={styles.item}>
                    <NewsSvg className={styles.svg}/>

                    <div className={styles.name}>Новости</div>

                </div>


            </div>



            </div>

        </div>
    )

}

export default Sidebar;