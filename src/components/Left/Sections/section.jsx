import Image from 'next/image'
import Link from 'next/link'
import SubTitle from '../../SubTitle/subTitle'
export default function Section() {
        return (
                <>
                        <div className="mt-1">
                                <div className="collection">
                                        <SubTitle NameTitle="بخش ها" />
                                        <Link href="/Netflix"><Image width={575} height={250} className="mt-2" src="/img/home/left/1.png" alt="Netflix" /></Link>
                                        <Link href="/HBO"><Image width={575} height={250} src="/img/home/left/4.png" alt="HBO" /></Link>
                                        <Link href="/Marvel"><Image width={575} height={250} src="/img/home/left/5.png" alt="Marvel" /></Link>
                                        <Link href="/BW"><Image width={575} height={250} src="/img/home/left/2.png" alt="BW" /></Link>
                                </div>
                                <div className="TitleSub mt-1">
                                        <Link href="/Film">
                                                <span>اخرین های پخش انلاین<i className="fab fa-youtube fil"></i></span>
                                        </Link>
                                </div>
                        </div>
                </>
        )
}
