import { useState, useRef } from 'react';
import Image from 'next/image'
import Link from 'next/link'
export default function Trailer({ poster, summary, name, videoPart }) {
        const [isActive, setIsActive] = useState(false);
        const vidRef = useRef(null);
        const handleClick = () => {
                setIsActive(!isActive);
                var Video = vidRef.current;
                Video.pause();
                Video.currentTime = 0;
        };
        return (
                <>
                        <div className="BannerTrailer mt-3">
                                <Image width={500} height={300} src={poster} alt="PosterTrailer" />
                                <h2>{name}</h2>
                                <p className="text-center">{summary}</p>
                                <Link href="#" onClick={handleClick}>تماشا</Link>
                                <div className={`trailer ${isActive ? "active" : ""}`}>
                                        <video ref={vidRef} controls={true}>
                                                <source type="video/webm" src={videoPart} />
                                        </video>
                                        <Image width={500} height={50} src="/img/close.png" className="close" onClick={handleClick} alt="close" />
                                </div>
                        </div>
                </>
        )
}