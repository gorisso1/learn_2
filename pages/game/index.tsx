import {useState} from "react";

import {Word} from "@/api/data/category.data";
import styles from "components/game/game.module.css";
import axios from "axios";
import Layout from "layout/layout";
import GameComponent from "components/game/gameComponent";

const GamePage = () =>{
    const [gameState, setGameState] = useState(false)
    const [dataGame, setDataGame] = useState<Word[]>([])
    const gameStart = async () =>{
        try {
            const url = "https://7754b33ab6b78312.mokky.dev/words"
            const response = await axios.get(url)
            setDataGame(response.data)
            setGameState(true)


        }catch (err:any){
            console.log(err)



        }


    }
    return(
        <Layout>

            {!gameState &&(
                <div className={styles.start}>
                      <div onClick={gameStart} className={styles.button}>Начать</div>
                </div>

            )}
            {gameState &&(
                <GameComponent words={dataGame}/>

            )}

        </Layout>


    )
}

export default GamePage;