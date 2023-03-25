import Image from 'next/image'
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
export default function Slider() {
        return (
                <>
                        <Swiper
                                direction={"vertical"}
                                autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                }}
                                pagination={{
                                        clickable: true,
                                }}
                                modules={[Pagination, Autoplay]}
                                className="BigSliderShow"
                        >
                                <SwiperSlide className="BigSliderShow2">
                                        <div className="title" data-swiper-parallax="-300">
                                                <span className="text-center"><big>MARVEL</big> برترین اثار </span>
                                                <Image width={900} height={100} src="/img/home/left/film1/poster/1.jpg" alt="" />
                                        </div>
                                </SwiperSlide>
                                <SwiperSlide className="BigSliderShow2">
                                        <div className="title" data-swiper-parallax="-300">
                                                <span className="text-center"><big>NETFLIX</big>برترین اثار </span>
                                                <Image width={900} height={100} src="/img/home/left/film1/poster/2.jpg" alt="" />
                                        </div>
                                </SwiperSlide>
                                <SwiperSlide className="BigSliderShow2">
                                        <div className="title" data-swiper-parallax="-300">
                                                <span className="text-center"><big>HBO</big>برترین اثار </span>
                                                <Image width={900} height={100} src="/img/home/left/film1/poster/3.jpg" alt="" />

                                        </div>
                                </SwiperSlide>
                                <SwiperSlide className="BigSliderShow2">
                                        <div className="title" data-swiper-parallax="-300">
                                                <span className="text-center"><big>Warner Bros</big>برترین اثار </span>
                                                <Image width={900} height={100} src="/img/home/left/film1/poster/4.jpg" alt="" />
                                        </div>
                                </SwiperSlide>
                                <SwiperSlide className="BigSliderShow2">
                                        <div className="title" data-swiper-parallax="-300">
                                                <span className="text-center"><big>NETFLIX</big>برترین اثار </span>
                                                <Image width={900} height={100} src="/img/home/left/film1/poster/2.jpg" alt="" />
                                        </div>
                                </SwiperSlide>
                        </Swiper>
                </>
        )
}
