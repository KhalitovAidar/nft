import {AboutUsProps} from "./AboutUs.props";
import BinanceIcon from './Binance_logo logo.svg';
import EtheriumLogo from './Ethereum logo.svg';
import BlockChainLogo from './Logo_of_Blockchain.io logo.svg';
import styles from './AboutUs.module.css';
import cn from "classnames";
import {Button, Htag, P} from "../../components";


export const AboutUs = ({className}: AboutUsProps): JSX.Element => {
    return (
        <div className={cn(
            styles.main
        )}>
            <div className={cn(
                styles.header
            )}>
                <Htag tag={"h2"}>About us</Htag>
                <P size={"s"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</P>
            </div>
            <div className={cn(
                styles.twoParts
            )}>
                <div>
                    <Htag tag={"h1"}>Picture</Htag>
                </div>
                <div className={cn(
                    styles.rightPart
                )}>
                    <Htag tag={"h3"}>Get Popular NFT</Htag>
                    <P size={"s"}>Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Etiam eu turpis molestie,
                        dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan,
                        risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
                        Maecenas eget condimentum velit, sit amet feugiat lectus.
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. </P>

                    <Button appereance={"primary"} size={"s"}>Show more</Button>
                </div>
            </div>

        </div>
    );
}