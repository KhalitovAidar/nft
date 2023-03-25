import cn from 'classnames';
import {CardProps} from "./Card.props";
import styles from "./Card.module.css";
import CardImage from "./CardImage.svg";
import {Button} from "../Button/Button";
import {P} from "../P/P";


export const Card = ({type, name, asset_platform_id, symbol}: CardProps): JSX.Element => {
    return (
        <div className={cn(
            styles.main
        )}>
            <div className={cn(styles.cardImage)}>
                <CardImage/>
            </div>

            <div className={cn(styles.twoParts)}>
                <div className={cn(
                    styles.leftPart
                )}>
                    <P size={"s"}>{type}</P>
                    <P size={"m"}>{name}</P>
                </div>

                <div className={cn(
                    styles.rightPart
                )}>
                    <P size={"s"}>{asset_platform_id}</P>
                    <P size={"m"}>{symbol}</P>
                </div>
            </div>
            
            <Button appereance={"primary"} size={"l"}>Place a bid</Button>
        </div>
    );
};