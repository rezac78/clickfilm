import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
export default function Header() {
        const [isActive, setIsActive] = useState(false);
        const handleClick = () => {
                setIsActive(!isActive);
        };
        return (
                <>
                        <section className={`banner ${isActive ? "active" : ""}`}>
                                <header>
                                        <a href="#" className="logo">click <big style={{ "color": "black" }} >FILM</big></a>
                                        <div className={`toggle ${isActive ? "active" : ""}`} onClick={handleClick}></div>
                                </header>
                                <div className="content">
                                        <div className="contentBx">
                                                <p style={{ "color": "aqua;" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum debitis amet minus ipsum officia nulla praesentium dignissimos atque! Debitis, in sint! Quidem aut recusandae praesentium ullam, quod assumenda necessitatibus sit laboriosam amet aliquam. Quae quos dolorem dolores aliquid similique eveniet, repudiandae reiciendis, molestias corrupti ullam consectetur! Illo sit error ullam aliquid, perferendis vero iste ducimus eos amet distinctio, excepturi neque cumque laboriosam aperiam quo, nesciunt aliquam nostrum voluptas temporibus in eius nam quod quisquam sapiente. Debitis, optio! Beatae quod dolore delectus, voluptates necessitatibus ut velit quae dolores maxime, accusamus est. Tempora, deleniti maxime. Repudiandae eos necessitatibus consequatur dignissimos accusantium quod, voluptatibus nobis laudantium ratione quasi ea voluptate eius cupiditate, labore aliquam obcaecati deserunt eveniet atque! Itaque nesciunt exercitationem quia quisquam?</p>
                                        </div>
                                        <div className="imgBx">
                                                <Image width={400} height={700} src="/img/marvel.png" alt="imgcover" />
                                        </div>
                                </div>
                                <ul className="sci">
                                        <li><a href="#"><Image width={80} height={80} src="/img/facebook.png" alt="facebook" /></a></li>
                                        <li><a href="#"><Image width={80} height={80} src="/img/twitter.png" alt="twitter" /></a></li>
                                        <li><a href="#"><Image width={80} height={80} src="/img/instagram.png" alt="instagram" /></a></li>
                                </ul>
                                <ul className="menu">
                                        <li><Link href="/">خانه</Link></li>
                                        <li><Link href="/serial">سریال</Link></li>
                                        <li><Link href="/film">فیلم</Link></li>
                                        <li><Link href="/users/register">ورود / ثبت نام</Link></li>
                                </ul>
                        </section>
                </>
        )
}
