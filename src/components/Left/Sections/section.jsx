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
                                        <Link href="/Netflix"><Image width={550} height={250} className="mt-2" src="/img/home/left/1.png" alt="" /></Link>
                                        <Link href="/HBO"><Image width={550} height={250} src="/img/home/left/4.png" alt="" /></Link>
                                        <Link href="/Marvel"><Image width={550} height={250} src="/img/home/left/5.png" alt="" /></Link>
                                        <Link href="/BW"><Image width={550} height={250} src="/img/home/left/2.png" alt="" /></Link>
                                </div>
                                <div className="text-center text-one">
                                        <Link href="/Film"><span style={{ "color": "#00D4AD;" }}>اخرین های پخش انلاین <big style={{ "color": "#3498db;" }}> بازیرنویس فارسی</big><i class="fab fa-youtube fil"></i></span></Link>
                                </div>
                        </div>
                </>
        )
}
