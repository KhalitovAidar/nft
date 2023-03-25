import {SponsorsProps} from "./Sponsors.props";
import BinanceIcon from './Binance_logo logo.svg';
import EtheriumLogo from './Ethereum logo.svg';
import BlockChainLogo from './Logo_of_Blockchain.io logo.svg';
import styles from './Sponsors.module.css';
import cn from "classnames";


export const Sponsors = ({className}: SponsorsProps): JSX.Element => {
    return (
        <div className={cn(
            styles.sponsors
        )}>
            <div><BinanceIcon/></div>
            <div><EtheriumLogo/></div>
            <div><BlockChainLogo/></div>
        </div>
    );
}