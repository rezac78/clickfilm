import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import Headers from "../components/Header/header"
export default function HBO() {
        return (
                <>
                        <Head>
                                <title>HBO</title>
                                <meta name="description" content="Generated by create next app" />
                                <meta name="viewport" content="width=device-width, initial-scale=1" />
                                <link rel="icon" href="/favicon.ico" />
                        </Head>
                        <>
                                <Headers />
                                <div style={{ "backgroundColor": "#111111;" }} className="cover">
                                        <section className="fullpart">
                                                <div className="row">
                                                        <div className="col-lg-6">
                                                                <div className="card mt-5">
                                                                        <div className="content">
                                                                                <h2>کاپیتان مارول</h2>
                                                                                <p className="">کاپیتیک فیلم ابرقهرمانی بر پایهٔ شخصیت کاپیتان مارول از مارول کامیکس است. این فیلم به تهیه‌کنندگی مارول استودیوز ساخته و توسط استودیو سینمایی والت دیزنی توزیع شد. این فیلم بیست و یکمین فیلم در دنی</p>
                                                                                <a href="#">دانلود فیلم</a>
                                                                        </div>
                                                                        <Image width={500} height={100} src="/img/home/hbo/1.png" alt="" className="award-img" />
                                                                </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                                <div className="card mt-5">
                                                                        <div className="content">
                                                                                <h2>کاپیتان امریکا</h2>
                                                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis numquam id, veniam nam iure ea obcaecati veritatis ab corporis recusandae necessitatibus laborum, nesciunt ad non magnam architecto est dolorum expedita.</p>
                                                                                <a href="#">دانلود فیلم</a>
                                                                        </div>
                                                                        <Image width={500} height={100} src="/img/home/hbo/2.png" alt="" className="award-img" />
                                                                </div>
                                                        </div>
                                                </div>
                                        </section>
                                </div>

                        </>
                </>
        )
}
