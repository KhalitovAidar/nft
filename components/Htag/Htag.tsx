import cn from 'classnames';
import styles from './Htag.module.css';
import {HtagProps} from "./Htag.props";


export const Htag = ({children, tag}: HtagProps): JSX.Element => {

    switch(tag){
        case "h1":
            return <h1 className={styles.h1}>{children}</h1>;
        case "h2":
            return <h2 className={styles.h2}>{children}</h2>;
        case "h3":
            return <h3 className={styles.h3}>{children}</h3>;
        default:
            return <></>;
    };
};