import { useState } from 'react';
import Headers from "../components/Header/header"
import Meta from '@/components/MetaTitle/Meta';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link'
export default function Download() {
        const [isActive, setIsActive] = useState(false);
        const [isActive2, setIsActive2] = useState(false);
        const [isActive3, setIsActive3] = useState(false);
        const handleClick = () => {
                setIsActive(!isActive);
        };
        const handleClick2 = () => {
                setIsActive2(!isActive2);
        };
        const handleClick3 = () => {
                setIsActive3(!isActive3);
        };
        return (
                <>
                        <Meta NameTitle="Download" linkTitle="Home" />
                        <div style={{ "background": "#111111" }}>
                                <Headers />
                                <section >
                                        <div className="classContainer">
                                                <main >
                                                        <div className="container">
                                                                <div className="main">
                                                                        <div className="Main-Download">
                                                                                <div className="part1">
                                                                                        <div className="name-part">
                                                                                                <span>دانلود فیلم Fear of Rain 2021</span>
                                                                                        </div>
                                                                                        <div className="collaction-part">
                                                                                                <span>ترسناک|درام|هیجان انگیز</span>
                                                                                        </div>
                                                                                </div>
                                                                                <div className="part2">
                                                                                        <div className="country-part ">
                                                                                                <i className="fas fa-globe"><span>محصول کشور : امریکا</span></i>
                                                                                                <i className="far fa-clock"><span>مدت زمان:92 دقیقه</span></i>
                                                                                        </div>
                                                                                        <div className="IMDB-part">
                                                                                                <i className="fas fa-star"><big>5.9</big><small>/10</small><span>IMDB</span></i>
                                                                                        </div>
                                                                                </div>
                                                                                <div className="part2">
                                                                                        <div className="pay-part ">
                                                                                                <i className="fas fa-trophy"><span>فروش کلی : ثبت نشده</span></i>
                                                                                        </div>
                                                                                        <div className="min-part">
                                                                                                <i className="far fa-clipboard"><span>میزان آراء: 2.112 نفر</span></i>
                                                                                        </div>
                                                                                </div>
                                                                                <div className="part3">
                                                                                        <div className="max-part text-right">
                                                                                                <span>کارگردان : <big>Castille Landon</big></span>
                                                                                                <span>بازیگران : <big>Israel Broussard, Katherine Heigl, Madison Iseman</big></span>
                                                                                        </div>
                                                                                </div>
                                                                                <div className="part3">
                                                                                        <div className="matn-part text-center">
                                                                                                <span>خلاصه داستان :</span>
                                                                                                <p>یک دختر جوان که در تمام طول زندگی‌اش با بیماری اسکیزوفرنی دست و پنجه نرم کرده است، به محض آنکه نسبت به همسایه خود برای سرقت یک کودک مشکوک می‌شود، می‌بایست با توهمات وحشتناک جدیدی مواجه شود و...</p>
                                                                                        </div>
                                                                                </div>

                                                                                <div className="part2">
                                                                                        <div className="number-part">
                                                                                                <span>نمره منتقدین <small>20</small> <big>از 100</big></span>
                                                                                        </div>
                                                                                        <div className="age-part ">
                                                                                                <span>رده سنی <big>PG-13</big></span>
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                        <div className="part4">
                                                                                <div className="link">
                                                                                        <span>لینک های دانلود</span>
                                                                                </div>
                                                                                <div className="part-link">
                                                                                        <div className="container mt-4">
                                                                                                <div className="user-info">
                                                                                                        <div className="img-name">
                                                                                                                <i onClick={handleClick} className={`fas fa-chevron-${isActive ? "up" : "down"}`}></i>
                                                                                                                <span style={{ "fontWeight": "bold"}}>لینک های دانلود زبان اصلی</span>
                                                                                                        </div>
                                                                                                        <div className={isActive ? "DownloadDetails" : "DownloadDetailsOff"}>
                                                                                                                <div className="main-link text-center">
                                                                                                                        <i className="fas fa-cloud-download-alt"><span>کیفیت : <big>BluRay 1080p</big>== <small>انگورد :<span>RARBG</span>==</small><span>حجم : <span> 2.07 GB</span></span></span></i>
                                                                                                                </div>
                                                                                                                <div className="buttom-link">
                                                                                                                        <Link href="#"><button>کلیک کنید</button></Link>
                                                                                                                </div>
                                                                                                        </div>
                                                                                                </div>
                                                                                        </div>
                                                                                        <div className="container mt-4">
                                                                                                <div style={{ "backgroundColor": "#E74D3D" , "color":"white"}} className="user-info2">
                                                                                                        <div className="img-name">
                                                                                                                <i onClick={handleClick2} className={`fas fa-chevron-${isActive2 ? "up" : "down"}`}></i>
                                                                                                                <span style={{ "fontWeight": "bold"}}>لینک های دانلود دوبله</span>
                                                                                                        </div>
                                                                                                        <div className={isActive2 ? "DownloadDetails" : "DownloadDetailsOff"}>
                                                                                                                <div className="main-link text-center">
                                                                                                                        <i className="fas fa-cloud-download-alt"><span>کیفیت : <big>BluRay 1080p</big>== <small>انگورد :<span>RARBG</span>==</small><span>حجم : <span> 2.07 GB</span></span></span></i>
                                                                                                                </div>
                                                                                                                <div className="buttom-link">
                                                                                                                        <Link href="#"><button>کلیک کنید</button></Link>
                                                                                                                </div>
                                                                                                        </div>
                                                                                                </div>
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </main>
                                        </div>
                                </section>
                        </div>
                        <Footer />
                </>
        )
}
