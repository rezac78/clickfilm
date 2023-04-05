import Image from 'next/image'
import Link from 'next/link'
export default function Serials({ Network, Episode, poster, Number, name, Quality, summary, type, Slug }) {
        const myLoader = ({ src }) => {
                return poster;
        }
        return (
                <>
                        <div className="CartSerialAll">
                                <Link href={`Serial/${Slug}`}>
                                        <div className="overCover">
                                                <Image loader={myLoader} width={485} height={300} src={poster} alt="" />
                                                <p>{summary}</p>
                                        </div>
                                        <div className="imgcaver">
                                                <div className="star"><i className="fas fa-star"><span>{8.7} <small>/10</small></span></i></div>
                                                <div className="imagtitle"><span>فصل {Number}  قسمت {Episode} </span></div>
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
                                                        <span>ژانر: {type.join(' |')}</span>
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
