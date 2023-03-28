import SubTitle from '@/components/SubTitle/subTitle'
import Image from 'next/image'
import Link from 'next/link'
export default function Trailer() {
        return (
                <>
                        <div className="mt-3">
                                <SubTitle NameTitle="آخرین تریلرها" />
                        </div>

                        <div className="trailerSection mt-3">
                                <Link href="/Trailers" aria-label="Read more about Seminole tax hike"><Image width={700} height={300} src="/img/home/left/film1/3.jpg" alt="" /></Link>
                                <div>
                                        <div className="serialpart2">
                                                <div className="right3"><span>the walking ded</span></div>
                                                <div className="left3"><span>تریلر فصل 1 سریال</span></div>
                                        </div>
                                </div>
                        </div>
                        <div className="text-center submit-one mt-3">
                                <Link href="/Trailers">
                                        <SubTitle NameTitle="ورود به ارشیو تریلرها" />
                                </Link>
                        </div>
                </>
        )
}
