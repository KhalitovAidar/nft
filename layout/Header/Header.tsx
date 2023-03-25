import cn from 'classnames';
import styles from './Header.module.css';
import {HeaderProps} from "./Header.props";
import React, {useEffect} from "react";
import {Button, Htag, Input, P} from "../../components";
import MenuIcon from './menu-line.svg';


export const Header = ({className, ...props}: HeaderProps): JSX.Element => {
    return (
       <header className={cn(styles.header)}>
           <Htag tag={"h3"}>Some</Htag>
           <Input />
           <div className={styles.menu}>
               <P size={"m"}>Collections</P>
               <P size={"m"}>Feature</P>
               <P size={"m"}>FAQ</P>
               <Button appereance={"primary"} size={"s"}>Select Wallet</Button>
           </div>
           <div className={styles.menuIcon}>
               <MenuIcon />
           </div>
       </header>
    );
};