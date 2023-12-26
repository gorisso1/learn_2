import React, { useState } from "react";
import styles from "./game.module.css";
import { GameProps } from "interface/game.props";
import { useSpring, animated } from "react-spring";
import {toast} from "react-toastify";

const Text = ({ children }: { children: React.ReactNode }) => (
    <div className={styles.text}>{children}</div>
);

const GameComponent = ({ words }: GameProps) => {
    const getRandomIndex = () => Math.floor(Math.random() * words.length);

    const [correct, setCorrect] = useState<number | null>(null);
    console.log(correct)
    const [loading, setLoading] = useState<boolean>(false);

    const correctAnswerIndex = getRandomIndex();
    const correctAnswer = words[correctAnswerIndex].text;

    const randomIndexes: number[] = [];
    while (randomIndexes.length < 3) {
        const index = getRandomIndex();
        if (index !== correctAnswerIndex && !randomIndexes.includes(index)) {
            randomIndexes.push(index);
        }
    }

    const allIndexes = [...randomIndexes, correctAnswerIndex].sort(() => Math.random() - 0.5);
    const submit = (index: number): void => {
        if (index === correctAnswerIndex) {
            setCorrect(prevState => prevState+1);
            setLoading(true)
            console.log("Правильный ответ")
            toast.success("Правильный ответ!", {

                autoClose: 2000, // Закрытие уведомления через 2 секунды
            });

            setTimeout(() => {

                setLoading(false)
            }, 2000);
        } else {

            setLoading(true)
            console.log("Неправильный ответ")
            toast.error("Неправильный ответ!", {

                autoClose: 2000, // Закрытие уведомления через 2 секунды
            });
            // Добавьте задержку перед снятием подсветки (например, с помощью setTimeout)
            setTimeout(() => {
                setLoading(false)
            }, 2000);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Text>{correctAnswer}</Text>
            </div>
            <div className={styles.correct}>Правильных ответов:{correct}</div>
            <div className={styles.grid_}>
                {allIndexes.map((index) => (
                    <div
                        key={index}
                        className={`${styles.button} `}
                        onClick={!loading ?() => submit(index):undefined}
                    >
                        {words[index].translation}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GameComponent;