import {InputProps} from "./Input.props";
import {inspect} from "util";
import styles from './Input.module.css';
import SearchIcon from './search.svg';


export const Input = ({}: InputProps): JSX.Element => {
    return(
        <div className={styles.divInput}>
        <input
            className={styles.input}
            placeholder={"Search items and collections"}/>
            <div className={styles.icon}>
                <SearchIcon/>
            </div>
        </div>
    );
};