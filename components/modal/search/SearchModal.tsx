
import styles from './searchmodal.module.css';
import {Word} from "@/api/data/category.data";
import {SearchModalProps} from "interface/search.props";
const SearchModal: React.FC<SearchModalProps> = ({ word }) => {
    const limitedWords = word.slice(0, 5);
    return (
        <div className={styles.modal}>
            <div className={styles.container}>
                <div>Названия</div>
                <div>Перевод</div>
            </div>
                {limitedWords.map((item) => (
                    <div key={item.id} className={styles.grid_}>

                        <div  className={styles.text}>
                            {item.text}
                        </div>
                        <div  className={styles.translete}>
                            {item.translation}
                        </div>
                    </div>
                    ))}

        </div>
    );
};

export default SearchModal;