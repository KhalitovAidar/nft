import cn from 'classnames';
import styles from './Sample.module.css';
import {SampleProps} from "./Sample.props";
import React, {useEffect} from "react";
import {Button, Htag, Input, P} from "../../components";
import {Index} from "./Index/Index";


export const Sample = ({className, ...props}: SampleProps): JSX.Element => {
    return (
       <div
           className={cn(styles.main)}
           {...props}
       >
           <div className={cn(styles.leftPart, className)}>
               <Htag tag={"h1"}>Create, Sell & Collect Your Own Creative NFT</Htag>
               <P size={"s"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.</P>
               <Button className={cn(
                   styles.firstButton
               )} appereance={"primary"} size={"s"}>Explore now</Button>
               <Button appereance={"ghost"} size={"s"}>Sell NFT</Button>
               <div className={cn(styles.indexes)}>
                   <Index childrenHtag={"37k+"} childrenP={"Artworks"}/>
                   <Index childrenHtag={"20k+"} childrenP={"Artists"}/>
                   <Index childrenHtag={"99k+"} childrenP={"Aucations"}/>
               </div>

           </div>
           <div className={styles.rightPart}>

           </div>
       </div>
    );
};