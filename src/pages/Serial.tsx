import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import Headers from "../components/Header/header"
import Main from '@/components/Main/Main'
import Footer from '@/components/Footer/Footer'
export default function Film() {
        return (
                <>
                        <Head>
                                <title>Serial</title>
                                <meta name="description" content="Generated by create next app" />
                                <meta name="viewport" content="width=device-width, initial-scale=1" />
                                <link rel="icon" href="/favicon.ico" />
                        </Head>
                        <>
                                <section className="banner">
                                        <header>
                                                <a href="#" className="logo">click <big style={{ "color": "black;" }}>FILM</big></a>
                                                <div className="toggle"></div>
                                        </header>
                                        <div className="containe">
                                                <div className="clip clip6"></div>
                                                <div className="clip clip7"></div>
                                                <div className="clip clip8"></div>
                                                <div className="clip clip9"></div>
                                                <div className="clip clip10"></div>
                                        </div>
                                        <ul className="sci">
                                                <li><a href="#"><Image alt='' width={100} height={100} src="/img/facebook.png" /></a></li>
                                                <li><a href="#"><Image alt='' width={100} height={100} src="/img/twitter.png" /></a></li>
                                                <li><a href="#"><Image alt='' width={100} height={100} src="/img/instagram.png" /></a></li>
                                        </ul>
                                        <ul className="menu">
                                                <li><Link href="/">خانه</Link></li>
                                                <li><Link href="/serial">سریال</Link></li>
                                                <li><Link href="/film">فیلم</Link></li>
                                                <li><Link href="/users/register">ورود / ثبت نام</Link></li>
                                        </ul>
                                </section>
                                <Main />
                                <Footer />

                        </>
                </>
        )
}
