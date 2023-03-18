import Image from 'next/image'
import Link from 'next/link'
export default function Trailer() {
        return (
                <>
                        <div className="textCollection text-center mt-2">
                                <span>آخرین تریلرها</span>
                        </div>
                        <div className="trailer m-3">
                                <a href=""><Image width={500} height={300} src="/img/home/left/film1/3.jpg" alt="" /></a>
                                <div className="">
                                        <div className="serialpart2">
                                                <div className="right3"><span>the walking ded</span></div>
                                                <div className="left3"><span>تریلر فصل 1 سریال</span></div>
                                        </div>
                                </div>
                        </div>
                        <div className="text-center submit-one mt-3">
                                <Link href="/Trailer"><span style={{ "color": "#00D4AD;" }}>ورود به ارشیو تریلرها</span></Link>
                        </div>
                </>
        )
}
