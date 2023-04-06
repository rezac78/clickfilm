import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Serial({ cover, CoverPhone, MP4, Title, Tags, Director, Actors, Description }) {
        const [isActive, setIsActive] = useState(false);
        const vidRef = useRef(null);
        const handleClick = () => {
                setIsActive(!isActive);
                var Video = vidRef.current;
                Video.pause();
                Video.currentTime = 0;
        };
        const [mobailSize, setMobailSize] = useState();
        useEffect(() => {
                window.addEventListener("resize", () => {
                        setMobailSize(window.innerWidth);
                });
        }, []);
        const myLoader = ({ src }) => {
                return cover;
        };
        const myLoaderPhone = ({ src }) => {
                return CoverPhone;
        };
        return (
                <>
                        <div className="" >
                                <div className="video">
                                        <div className="clipDown">
                                                <Image
                                                        loader={mobailSize < 650 ? myLoaderPhone : myLoader}
                                                        src={mobailSize < 650 ? cover : CoverPhone}
                                                        width={1400}
                                                        height={450}
                                                        alt="poster-Film"
                                                />
                                        </div>
                                        <div className="sphere">
                                                <video loop muted autoPlay>
                                                        <source type="video/webm" src={MP4} />
                                                </video>
                                        </div>
                                </div>
                                <div className="classContainerDown">
                                        <main>
                                                <div className="container">
                                                        <div className="main">
                                                                <div className="Main-Download">
                                                                        <div className="part1">
                                                                                <div className="name-part">
                                                                                        <span>دانلود فیلم {Title}</span>
                                                                                </div>
                                                                                <div className="collaction-part">
                                                                                        <span>{Tags.join(" |")}</span>
                                                                                </div>
                                                                        </div>
                                                                        <div className="part2">
                                                                                <div className="country-part ">
                                                                                        <i className="fas fa-globe">
                                                                                                <span>محصول کشور : امریکا</span>
                                                                                        </i>
                                                                                        <i className="far fa-clock">
                                                                                                <span>مدت زمان:92 دقیقه</span>
                                                                                        </i>
                                                                                </div>
                                                                                <div className="IMDB-part">
                                                                                        <i className="fas fa-star">
                                                                                                <big>5.9</big>
                                                                                                <small>/10</small>
                                                                                                <span>IMDB</span>
                                                                                        </i>
                                                                                </div>
                                                                        </div>
                                                                        <div className="part2">
                                                                                <div className="pay-part ">
                                                                                        <i className="fas fa-trophy">
                                                                                                <span>فروش کلی : ثبت نشده</span>
                                                                                        </i>
                                                                                </div>
                                                                                <div className="min-part">
                                                                                        <i className="far fa-clipboard">
                                                                                                <span>میزان آراء: 2.112 نفر</span>
                                                                                        </i>
                                                                                </div>
                                                                        </div>
                                                                        <div className="part3">
                                                                                <div className="max-part text-right">
                                                                                        <span>
                                                                                                کارگردان : <big>{Director}</big>
                                                                                        </span>
                                                                                        <span>
                                                                                                بازیگران : <big>{Actors.join(" ,")}</big>
                                                                                        </span>
                                                                                </div>
                                                                        </div>
                                                                        <div className="part3">
                                                                                <div className="matn-part text-center">
                                                                                        <span>خلاصه داستان :</span>
                                                                                        <p>{Description}</p>
                                                                                </div>
                                                                        </div>

                                                                        <div className="part2">
                                                                                <div className="number-part">
                                                                                        <span>
                                                                                                نمره منتقدین <small>20</small> <big>از 100</big>
                                                                                        </span>
                                                                                </div>
                                                                                <div className="BannerTrailer">
                                                                                        <div className="BannerTrailer-Button">
                                                                                                <Link href="#" onClick={handleClick}>
                                                                                                        تماشا
                                                                                                </Link>
                                                                                        </div>
                                                                                        <div
                                                                                                className={`trailer ${isActive ? "active" : ""}`}
                                                                                        >
                                                                                                <video ref={vidRef} controls={true}>
                                                                                                        <source type="video/webm" src={MP4} />
                                                                                                </video>
                                                                                                <Image
                                                                                                        width={100}
                                                                                                        height={10}
                                                                                                        src="/img/close.png"
                                                                                                        className="close"
                                                                                                        onClick={handleClick}
                                                                                                        alt="close"
                                                                                                />
                                                                                        </div>
                                                                                </div>
                                                                                <div className="age-part ">
                                                                                        <span>
                                                                                                رده سنی <big>PG-13</big>
                                                                                        </span>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </main>
                                </div>
                        </div>
                </>
        )
}
