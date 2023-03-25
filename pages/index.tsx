import Head from 'next/head'
import { Inter } from 'next/font/google'
import {Button, Htag, Input, P} from "../components";
import React from "react";
import {Header} from "../layout/Header/Header";
import {Sample} from "../layout/sample/Sample";
import {Sponsors} from "../layout/Sponsors/Sponsors";
import {AboutUs} from "../layout/AboutUs/AboutUs";
import {Card} from "../components/Card/Card";
import {GetStaticProps} from "next";
import axios from "axios";
import {Nft} from "../interfaces/nfts";

const inter = Inter({ subsets: ['latin'] })

export default function Home({ nfts }: HomeProps): JSX.Element {
  return (
    <>
      <Head>
          <title>Home</title>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet"/>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap"
                        rel="stylesheet" />
      </Head>
        <Header />
        <Sample />
        <Sponsors/>
        <AboutUs />
        {/*<ul>{*/}
        {/*    nfts.map(n => (<li key={n.id}>{n.asset_platform_id}</li>))*/}
        {/*}</ul>*/}
       <Card asset_platform_id={"lol"} name={"kek"} type={"cheburek"} symbol={"lol"}></Card>
    </>
  )
}

export const getStaticProps: GetStaticProps = async  () => {
    const { data: nfts } = await axios.get<Nft[]>(process.env.NEXT_PUBLIC_DOMAIN + "/api/v3/nfts/list")
    return {
        props: {
            nfts
        } //TODO: Сделать типизацию полученных данных интерфейсами
    }
}

interface HomeProps {
    nfts: Nft[]
}