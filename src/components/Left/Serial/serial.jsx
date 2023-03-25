import SubTitle from '@/components/SubTitle/subTitle'
import Image from 'next/image'
import Link from 'next/link'
export default function Serial() {
        return (
                <>
                        <div className="mt-2">
                                <SubTitle NameTitle="آخرین سریال ها" />
                        </div>
                        <div className="partserial">
                                <div className="mt-3">
                                        <Link href="/Serial"><Image width={500} height={120} src="/img/home/left/film1/2.jpg" alt="" /></Link>
                                </div>
                                <div className="">
                                        <div className="serialpart">
                                                <a href=""><div className="right2"><span>the walking ded</span></div></a>
                                                <a href=""><div className="left2"><span>قسمت اخر فصل اول اضافه شد</span></div></a>
                                        </div>
                                </div>
                                <div className="mt-3">
                                        <Link href="/serial"><Image width={500} height={120} src="/img/home/left/film1/4.jpg" alt="" /></Link>
                                </div>
                                <div className="">
                                        <div className="serialpart">
                                                <a href=""><div className="right2"><span>the walking ded</span></div></a>
                                                <a href=""><div className="left2"><span>قسمت اخر فصل اول اضافه شد</span></div></a>
                                        </div>
                                </div>
                                <div className="mt-3">
                                        <a href="/serial"><Image width={500} height={120} src="/img/home/left/film1/5.jpg" alt="" /></a>
                                </div>
                                <div className="">
                                        <div className="serialpart">
                                                <a href=""><div className="right2"><span>the walking ded</span></div></a>
                                                <a href=""><div className="left2"><span>قسمت اخر فصل اول اضافه شد</span></div></a>
                                        </div>
                                </div>
                                <div className="mt-3">
                                        <a href="/serial"><Image width={500} height={120} src="/img/home/left/film1/6.jpg" alt="" /></a>
                                </div>
                                <div className="">
                                        <div className="serialpart">
                                                <a href=""><div className="right2"><span>the walking ded</span></div></a>
                                                <a href=""><div className="left2"><span>قسمت اخر فصل اول اضافه شد</span></div></a>
                                        </div>
                                </div>
                                <div className="mt-3">
                                        <a href="/serial"><Image width={500} height={120} src="/img/home/left/film1/7.jpg" alt="" /></a>
                                </div>
                                <div className="">
                                        <div className="serialpart">
                                                <a href=""><div className="right2"><span>the walking ded</span></div></a>
                                                <a href=""><div className="left2"><span>قسمت اخر فصل اول اضافه شد</span></div></a>
                                        </div>
                                </div>
                        </div>
                        <div className="text-center submit-one mt-3">
                                <Link href="/Serial">
                                        <SubTitle NameTitle="ورود به ارشیو سریال ها" />
                                </Link>
                        </div>
                </>
        )
}
