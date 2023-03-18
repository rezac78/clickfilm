import Image from 'next/image'
export default function Slider() {
        return (
                <>
                        <div className="">
                                <div id="carouselExampleDark" class="carousel  slide" data-bs-ride="carousel">
                                        <div class="carousel-indicators">
                                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                        </div>
                                        <div class="carousel-inner">
                                                <div class="carousel-item postrs active" data-bs-interval="1000">
                                                        <Image width={800} height={100} style={{ "width": "100%;" }} src="/img/home/left/film1/poster/1.jpg" alt="" />
                                                        <span className="carousel-caption text-center"><big>MARVEL</big> برترین اثار </span>
                                                </div>
                                                <div class="carousel-item postrs" data-bs-interval="1000">
                                                        <Image width={800} height={100} style={{ "width": "100%;" }} src="/img/home/left/film1/poster/2.jpg" alt="" />
                                                        <span className="carousel-caption text-center"><big>NETFLIX</big>برترین اثار </span>
                                                </div>
                                                <div class="carousel-item postrs">
                                                        <Image width={800} height={100} style={{ "width": "100%;" }} src="/img/home/left/film1/poster/3.jpg" alt="" />
                                                        <span className="carousel-caption text-center"><big>HBO</big>برترین اثار </span>
                                                </div>
                                                <div class="carousel-item postrs">
                                                        <Image width={800} height={100} style={{ "width": "100%;" }} src="/img/home/left/film1/poster/4.jpg" alt="" />
                                                        <span className="carousel-caption text-center"><big>Warner Bros</big>برترین اثار </span>
                                                </div>
                                        </div>
                                </div>

                        </div>
                </>
        )
}
