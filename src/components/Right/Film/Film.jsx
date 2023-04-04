import Image from 'next/image'
import Link from 'next/link'
export default function Film({ img, name, type, Quality, ProductCountry, Director, Actors, summary }) {
        const myLoader = ({ src }) => {
                return img;
        }
        return (
                <>
                        <div className="Film-section">
                                <div className="Film-section-Rigth">
                                        <Link href="/Download">
                                                <div className="ImageBg">
                                                        <Image loader={myLoader} src={img} width={800} height={350} alt="poster-Film" />
                                                </div>
                                        </Link>
                                </div>
                                <div className="Film-section-Left">
                                        <div className="Film-section-headeTitle">
                                                <div className="Film-section-TitleName">
                                                        <Link href="/Download"><span>دانلود فیلم {name}</span></Link>
                                                </div>
                                                <div className="Film-section-IMDB">
                                                        <div className="Film-section-IMDB-icon"><i className="fas fa-star"><span>8.7 <small>/10</small></span></i></div>
                                                        <div className="Film-section-IMDB-IMDB"><span>IMDB</span></div>
                                                </div>
                                        </div>
                                        <div className="Film-section-Information">
                                                <div className="Film-section-TitleFilm">
                                                        <ul>
                                                                <li>
                                                                        <span className="Film-section-TitleFilm-genre"><i className="far fa-folder"></i>ژانر :</span>
                                                                        <span className="Film-section-TitleFilm-type">{type.join(' |')}</span>
                                                                </li>
                                                                <li>
                                                                        <span className="Film-section-TitleFilm-genre"><i className="fas fa-tv"></i>کیفیت :</span>
                                                                        <span className="">{Quality}</span>
                                                                </li>
                                                                <li>
                                                                        <span className="Film-section-TitleFilm-genre"><i className="fas fa-globe"></i>محصول کشور :</span>
                                                                        <span className="">{ProductCountry}</span>
                                                                </li>
                                                                <li>
                                                                        <span className="Film-section-TitleFilm-genre"><i className="fas fa-user"></i>کارگردان :</span>
                                                                        <span className="">{Director}</span>
                                                                </li>
                                                                <li>
                                                                        <span className="Film-section-TitleFilm-genre"><i className="fas fa-user-friends"></i>بازیگران :</span>
                                                                        <span className="">{Actors.join(', ')}</span>
                                                                </li>
                                                                <li>
                                                                        <div className="Film-section-TitleFilm-genre"><span className=""><i className="fas fa-stream"></i>خلاصه داستان :</span></div>
                                                                </li>
                                                        </ul>
                                                </div>
                                                <div className="Film-section-score">
                                                        <span>میزان آرا : <big>274</big></span>
                                                </div>
                                        </div>
                                        <div className="Film-section-summary">
                                                <p className="text-center">{summary}</p>
                                        </div>
                                </div>
                        </div>
                </>
        )
}
