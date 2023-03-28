import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { EffectCards, Autoplay } from "swiper";
import SubTitle from '@/components/SubTitle/subTitle';
export default function NewSection() {
        return (
                <>
                        <Swiper
                                effect={"cards"}
                                grabCursor={true}
                                modules={[EffectCards, Autoplay]}
                                className="SmallSliderShow"
                                autoplay={{
                                        delay: 2000,
                                        disableOnInteraction: false,
                                }}
                        >
                                <SwiperSlide className="SmallSliderShow2">
                                        <Link href="/Film" aria-label="Read more about Seminole tax hike"><Image width={250} height={350} src="/img/home/left/film1/1.jpg" alt="" /></Link>
                                </SwiperSlide>
                                <SwiperSlide className="SmallSliderShow2">
                                        <Link href="/Film" aria-label="Read more about Seminole tax hike"><Image width={250} height={350} src="/img/film/1.jpg" alt="" /></Link>
                                </SwiperSlide>
                                <SwiperSlide className="SmallSliderShow2">
                                        <Link href="/Film" aria-label="Read more about Seminole tax hike"><Image width={250} height={350} src="/img/film/3.jpg" alt="" /></Link>
                                </SwiperSlide>
                                <SwiperSlide className="SmallSliderShow2">
                                        <Link href="/Film" aria-label="Read more about Seminole tax hike"><Image width={250} height={350} src="/img/home/left/film1/1.jpg" alt="" /></Link>
                                </SwiperSlide>
                                <SwiperSlide className="SmallSliderShow2">
                                        <Link href="/Film" aria-label="Read more about Seminole tax hike"><Image width={250} height={350} src="/img/film/1.jpg" alt="" /></Link>
                                </SwiperSlide>
                                <SwiperSlide className="SmallSliderShow2">
                                        <Link href="/Film" aria-label="Read more about Seminole tax hike"><Image width={250} height={350} src="/img/film/3.jpg" alt="" /></Link>
                                </SwiperSlide>
                        </Swiper>
                        <div className="mt-3 PartTitle">
                                <Link href="/Film">
                                        <SubTitle NameTitle="ورود به این بخش" />
                                </Link>
                        </div>
                </>
        )
}
