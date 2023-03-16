import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Headers from "../components/Header/header"
import Footer from "../components/Footer/Footer"
import Main from "../components/Main/Main"
export default function Home() {
  return (
    <>
      <Head>
        <title>Click Film</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Headers />
      <Main />
      <Footer/>
    </>
  )
}
