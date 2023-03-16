import Image from 'next/image'
import Link from 'next/link'
export default function Section() {
        return (
                <>
                        <div className="mt-1">
                                <div className="collection">
                                        <div className="textCollection text-center">
                                                <span>بخش ها</span>
                                        </div>
                                        <a href="/netflex"><Image width={500} height={250} className="mt-2" src="/img/home/left/1.png" alt="" /></a>
                                        <a href="/hbo"><Image width={500} height={250} src="/img/home/left/4.png" alt="" /></a>
                                        <a href="/marvel"><Image width={500} height={250} src="/img/home/left/5.png" alt="" /></a>
                                        <a href="/BW"><Image width={500} height={250} src="/img/home/left/2.png" alt="" /></a>
                                </div>
                                <div className="text-center text-one">
                                        <a href=""><span style={{ "color": "#00D4AD;" }}>اخرین های پخش انلاین <big style={{ "color": "#3498db;" }}> بازیرنویس فارسی</big><i class="fab fa-youtube fil"></i></span></a>
                                </div>
                        </div>
                </>
        )
}
