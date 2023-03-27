import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function Header() {
        const [isActive, setIsActive] = useState(false);
        const [scrollY, setScrollY] = useState(0);
        const handleClick = () => {
                setIsActive(!isActive);
        };
        const router = useRouter();
        useEffect(() => {
                const handleScroll = () => {
                        setScrollY(window.scrollY);
                };
                handleScroll();
                window.addEventListener("scroll", handleScroll);
                return () => {
                        window.removeEventListener("scroll", handleScroll);
                };
        }, []);
        return (
                <>
                        <section className={`banner ${isActive ? "active" : ""}`}>
                                <header>
                                        <Link href="/" className="logo">Click <big style={{ "color": "black" }} >FILM</big></Link>
                                        <div className={`toggle ${isActive ? "active" : ""}`} onClick={handleClick}></div>
                                </header>
                                {
                                        router.route == "/" ?
                                                <div className="content">
                                                        <div className="contentBx">
                                                                <p>
                                                                        سینما این شانس رو به ما میده تا موقعیت‌های متفاوتی که شاید هیچوقت تو دنیای واقعی باهاشون برخورد نکنیم رو تجربه کنیم در موردشون فکر کنیم و با خودمون بگیم اگه من بودم چی میشد، چه تصمیمی میگرفتم. و اینجوریه که شما در وسعت زمانی و مکانی و جغرافیایی خیلی بزرگتری بارها جای آدمهای مختلف زندگی می‌کنید.
                                                                </p>
                                                        </div>
                                                        <div className="imgBx">
                                                                <Image width={400} height={700} src="/img/marvel.png" alt="imgcover" />
                                                        </div>
                                                </div> :
                                                router.route == "/Netflix" ?
                                                        <div className={scrollY <= 300 ? "filmBx" : "filmBx2"}>
                                                                <video loop muted autoPlay >
                                                                        <source type="video/webm" src="/video/2.mp4" />
                                                                </video>
                                                        </div>
                                                        :
                                                        router.route == "/HBO" ?
                                                                <div className={scrollY <= 300 ? "filmBx" : "filmBx2"}>
                                                                        <video loop muted autoPlay >
                                                                                <source type="video/webm" src="/video/3.mp4" />
                                                                        </video>
                                                                </div> :
                                                                router.route == "/Marvel" ?
                                                                        <div className={scrollY <= 300 ? "filmBx" : "filmBx2"}>
                                                                                <video loop muted autoPlay >
                                                                                        <source type="video/webm" src="/video/1.mp4" />
                                                                                </video>
                                                                        </div> :
                                                                        router.route == "/BW" ?
                                                                                <div className={scrollY <= 300 ? "filmBx" : "filmBx2"}>
                                                                                        <video loop muted autoPlay >
                                                                                                <source type="video/webm" src="/video/4.mp4" />
                                                                                        </video>
                                                                                </div> :
                                                                                router.route == "/Film" ?
                                                                                        <div className="containe">
                                                                                                <div className="clip clip1"></div>
                                                                                                <div className="clip clip2"></div>
                                                                                                <div className="clip clip3"></div>
                                                                                                <div className="clip clip4"></div>
                                                                                                <div className="clip clip5"></div>
                                                                                        </div> :
                                                                                        router.route == "/Serial" ?
                                                                                                <div className="containe">
                                                                                                        <div className="clip clip6"></div>
                                                                                                        <div className="clip clip7"></div>
                                                                                                        <div className="clip clip8"></div>
                                                                                                        <div className="clip clip9"></div>
                                                                                                        <div className="clip clip10"></div>
                                                                                                </div> :
                                                                                                router.route == "/Download" ?
                                                                                                        <div className="video">
                                                                                                                <div className="clipDown clip16"></div>
                                                                                                                <div className="sphere">
                                                                                                                        <video loop muted autoPlay >
                                                                                                                                <source type="video/webm" src="/video/4.mp4" />
                                                                                                                        </video>
                                                                                                                </div>
                                                                                                        </div> :
                                                                                                        null
                                }
                                <ul className="sci">
                                        <li><Link href="/facebook"><Image width={80} height={80} src="/img/facebook.png" alt="facebook" /></Link></li>
                                        <li><Link href="/twitter"><Image width={80} height={80} src="/img/twitter.png" alt="twitter" /></Link></li>
                                        <li><Link href="/instagram"><Image width={80} height={80} src="/img/instagram.png" alt="instagram" /></Link></li>
                                </ul>
                                <ul className="menu">
                                        <li><Link href="/">خانه</Link></li>
                                        <li><Link href="/Serial">سریال</Link></li>
                                        <li><Link href="/Film">فیلم</Link></li>
                                        <li><Link href="/users/register">ورود / ثبت نام</Link></li>
                                </ul>
                        </section>
                </>
        )
}
