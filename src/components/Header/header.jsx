import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function Header() {
        const [isActive, setIsActive] = useState(false);
        const handleClick = () => {
                setIsActive(!isActive);
        };
        const router = useRouter();
        return (
                <>
                        <section className={`banner ${isActive ? "active" : ""}`}>
                                <header>
                                        <Link href="/" className="logo">click <big style={{ "color": "black" }} >FILM</big></Link>
                                        <div className={`toggle ${isActive ? "active" : ""}`} onClick={handleClick}></div>
                                </header>
                                {
                                        router.route == "/" ?
                                                <div className="content">
                                                        <div className="contentBx">
                                                                <p style={{ "color": "aqua;" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum debitis amet minus ipsum officia nulla praesentium dignissimos atque! Debitis, in sint! Quidem aut recusandae praesentium ullam, quod assumenda necessitatibus sit laboriosam amet aliquam. Quae quos dolorem dolores aliquid similique eveniet, repudiandae reiciendis, molestias corrupti ullam consectetur! Illo sit error ullam aliquid, perferendis vero iste ducimus eos amet distinctio, excepturi neque cumque laboriosam aperiam quo, nesciunt aliquam nostrum voluptas temporibus in eius nam quod quisquam sapiente. Debitis, optio! Beatae quod dolore delectus, voluptates necessitatibus ut velit quae dolores maxime, accusamus est. Tempora, deleniti maxime. Repudiandae eos necessitatibus consequatur dignissimos accusantium quod, voluptatibus nobis laudantium ratione quasi ea voluptate eius cupiditate, labore aliquam obcaecati deserunt eveniet atque! Itaque nesciunt exercitationem quia quisquam?</p>
                                                        </div>
                                                        <div className="imgBx">
                                                                <Image width={400} height={700} src="/img/marvel.png" alt="imgcover" />
                                                        </div>
                                                </div> :
                                                router.route == "/Netflix" ?
                                                        <div className="filmBx">
                                                                <video loop muted autoPlay >
                                                                        <source type="video/webm" src="/video/2.mp4" />
                                                                </video>
                                                        </div>
                                                        :
                                                        router.route == "/HBO" ?
                                                                <div className="filmBx">
                                                                        <video loop muted autoPlay >
                                                                                <source type="video/webm" src="/video/3.mp4" />
                                                                        </video>
                                                                </div> :
                                                                router.route == "/Marvel" ?
                                                                        <div className="filmBx">
                                                                                <video loop muted autoPlay >
                                                                                        <source type="video/webm" src="/video/1.mp4" />
                                                                                </video>
                                                                        </div> :
                                                                        router.route == "/BW" ?
                                                                                <div className="filmBx">
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
                                                                                                        <section class="video">
                                                                                                                <Image width={1500} height={10} src="/img/2.jpg" alt="" />
                                                                                                                <div class="sphere">
                                                                                                                        <video src="/video/1.mp4" autoplay muted loop></video>
                                                                                                                </div>
                                                                                                        </section> :
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