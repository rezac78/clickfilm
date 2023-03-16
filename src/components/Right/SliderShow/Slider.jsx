import Image from 'next/image'
import Link from 'next/link'
export default function Slider() {
        return (
                <>
                        <div className="">
                                <div className="container">
                                        <div className="carousel carousel-fade slide" data-ride="carousel" id="mycarousel">
                                                <ol className="carousel-indicators">
                                                        <li data-target="#mycarousel" data-slide-to="0" className="active"></li>
                                                        <li data-target="#mycarousel" data-slide-to="1"></li>
                                                        <li data-target="#mycarousel" data-slide-to="2"></li>
                                                        <li data-target="#mycarousel" data-slide-to="3"></li>
                                                </ol>
                                                <div className="carousel-inner">
                                                        <div className="carousel-item active postrs">
                                                                <Image width={800} height={100} style={{ "width": "100%;" }} src="/img/home/left/film1/poster/1.jpg" alt="" />
                                                                <span className="carousel-caption text-center"><big>MARVEL</big> برترین اثار </span>
                                                        </div>
                                                        <div className="carousel-item postrs">
                                                                <Image width={800} height={100} style={{ "width": "100%;" }} src="/img/home/left/film1/poster/2.jpg" alt="" />
                                                                <span className="carousel-caption text-center"><big>NETFLIX</big>برترین اثار </span>
                                                        </div>
                                                        <div className="carousel-item postrs">
                                                                <Image width={800} height={100} style={{ "width": "100%;" }} src="/img/home/left/film1/poster/3.jpg" alt="" />
                                                                <span className="carousel-caption text-center"><big>HBO</big>برترین اثار </span>
                                                        </div>
                                                        <div className="carousel-item postrs">
                                                                <Image width={800} height={100} style={{ "width": "100%;" }} src="/img/home/left/film1/poster/4.jpg" alt="" />
                                                                <span className="carousel-caption text-center"><big>Warner Bros</big>برترین اثار </span>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </>
        )
}
