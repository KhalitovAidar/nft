import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface CardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    name: string;
    asset_platform_id: string,
    type:string,
    symbol: string
}