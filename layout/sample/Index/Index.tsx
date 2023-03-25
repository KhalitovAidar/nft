import cn from 'classnames';
import styles from './Index.module.css';
import {IndexProps} from "./Index.props";
import React, {useEffect} from "react";
import {Htag, P} from "../../../components";


export const Index = ({className, childrenHtag, childrenP, ...props}: IndexProps): JSX.Element => {
    return (
       <div className={cn(styles.index)}>
           <Htag tag={"h3"}> {childrenHtag} </Htag>
           <P size={"s"}>{childrenP}</P>
       </div>
    );
};