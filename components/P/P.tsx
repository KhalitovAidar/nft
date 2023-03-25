import cn from 'classnames';
import styles from './P.module.css';
import {PProps} from "./P.props";


export const P = ({children, size, className, ...props}: PProps): JSX.Element => {

    return (
        <p
            className={cn(styles.p, className, {
                [styles.m]: size == 'm',
                [styles.s]: size == 's'
            })}
            {...props}
        >
            {children}
        </p>
    );
};