import Image from 'next/image'
import Link from 'next/link'
export default function Serials({ Network, poster, name, Quality, Score, summary, partSerial, type }) {
        return (
                <>
                        <div className="CartSerialAll">
                                <Link href="/Download">
                                        <div className="overCover">
                                                <Image width={485} height={300} src={poster} alt="" />
                                                <p>{summary}</p>
                                        </div>
                                        <div className="imgcaver">
                                                <div className="star"><i className="fas fa-star"><span>{Score} <small>/10</small></span></i></div>
                                                <div className="imagtitle"><span>{partSerial}</span></div>
                                        </div>
                                        <div className="cardtitle">
                                                <div className="nameserial">
                                                        <span>{name}</span>
                                                </div>
                                                <div className="nameTV">
                                                        <span>شبکه: {Network}</span>
                                                </div>
                                        </div>
                                        <div className="cardtitle2">
                                                <div className="nameserial3">
                                                        <span>ژانر: {type}</span>
                                                </div>
                                                <div className="nameserial3">
                                                        <span>کیفیت : {Quality}</span>
                                                </div>
                                        </div>
                                </Link>
                        </div>
                </>
        )
}
