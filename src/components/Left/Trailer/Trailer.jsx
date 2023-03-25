import SubTitle from '@/components/SubTitle/subTitle'
import Image from 'next/image'
import Link from 'next/link'
export default function Trailer() {
        return (
                <>
                        <div className="mt-2">
                                <SubTitle NameTitle="آخرین تریلرها" />
                        </div>

                        <div className="trailer m-3">
                                <Link href=""><Image width={500} height={300} src="/img/home/left/film1/3.jpg" alt="" /></Link>
                                <div className="">
                                        <div className="serialpart2">
                                                <div className="right3"><span>the walking ded</span></div>
                                                <div className="left3"><span>تریلر فصل 1 سریال</span></div>
                                        </div>
                                </div>
                        </div>
                        <div className="text-center submit-one mt-3">
                                <Link href="/Trailer">
                                        <SubTitle NameTitle="ورود به ارشیو تریلرها" />
                                </Link>
                        </div>
                </>
        )
}
