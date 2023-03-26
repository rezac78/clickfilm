import Image from 'next/image'
import Link from 'next/link'
export default function Film({ img, name, score, type, Quality, ProductCountry, Director, Actors, summary, score2 }) {
        return (
                <>
                        <div className="Film-section">
                                <div className="Film-section-Rigth">
                                        <Link href="/Download"><Image width={600} height={100} src={img} alt="poster-Film" /></Link>
                                </div>
                                <div className="Film-section-Left">
                                        <div className="Film-section-headeTitle">
                                                <div className="Film-section-TitleName">
                                                        <Link href="/Download"><span>دانلود فیلم {name}</span></Link>
                                                </div>
                                                <div className="Film-section-IMDB">
                                                        <div className="Film-section-IMDB-icon"><i class="fas fa-star"><span>{score} <small>/10</small></span></i></div>
                                                        <div className="Film-section-IMDB-IMDB"><span>IMDB</span></div>
                                                </div>
                                        </div>
                                        <div className="Film-section-Information">
                                                <div className="Film-section-TitleFilm">
                                                        <ul>
                                                                <li>
                                                                        <span className="Film-section-TitleFilm-genre"><i className="far fa-folder"></i>ژانر :</span>
                                                                        <span className="Film-section-TitleFilm-type">{type}</span>
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
                                                                        <span className="">{Actors}</span>
                                                                </li>
                                                                <li>
                                                                        <div className="Film-section-TitleFilm-genre"><span className=""><i className="fas fa-stream"></i>خلاصه داستان :</span></div>
                                                                </li>
                                                        </ul>
                                                </div>
                                                <div className="Film-section-score">
                                                        <span>میزان آرا : <big>{score2}</big></span>
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
