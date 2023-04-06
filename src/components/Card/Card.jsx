import { useState, useRef } from "react";
import Image from 'next/image'
import Link from 'next/link'
export default function Card({ poster, summary, name, videoPoster }) {
        const [isActive, setIsActive] = useState(false);
        const vidRef = useRef(null);
        const myLoader = ({ src }) => {
                return poster;
        };
        const handleClick = () => {
                setIsActive(!isActive);
                var Video = vidRef.current;
                Video.pause();
                Video.currentTime = 0;
        };
        return (
                <>
                        <div className="card" style={{ "background": "black" }}>
                                <div className="card-content">
                                        <h2>{name}</h2>
                                        <p className="">{summary}</p>
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
                                                                <source type="video/webm" src={videoPoster} />
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
                                        </div>                                </div>
                                <Image width={600} height={100} loader={myLoader} src={poster} alt="Poster" className="award-img" />
                        </div>
                </>
        )
}