import cn from 'classnames';
import styles from './Button.module.css';
import {motion, useMotionValue} from 'framer-motion';
import {ButtonProps} from "./Button.props";
import {useEffect} from "react";


export const Button = ({children, appereance, size, className, ...props}: ButtonProps): JSX.Element => {
    const scale = useMotionValue(1);

    useEffect(() => {
        scale.onChange(s => console.log(s));
    }, []);

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            className={cn(styles.button, className, {
                [styles.primary]: appereance == 'primary',
                [styles.ghost]: appereance == 'ghost',
                [styles.primaryghost]: appereance == 'primaryghost',
                [styles.s]: size == 's',
                [styles.m]: size == 'm',
                [styles.l]: size == 'l',
             })}
            style={{scale}}
            {...props}
        >
            {children}
        </motion.button>
    );
};