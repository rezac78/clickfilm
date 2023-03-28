import Image from 'next/image'
import Link from 'next/link'
export default function Serial({ ImageCover, Name, PartSerial }) {
        return (
                <>
                        <div className="mt-3">
                                <Link href="/Serial"><Image width={500} height={120} src={ImageCover} alt="SerialImage" /></Link>
                        </div>
                        <div className="">
                                <div className="serialpart">
                                        <Link href="#"><div className="right2"><span>{Name}</span></div></Link>
                                        <Link href="#"><div className="left2"><span>{PartSerial}</span></div></Link>
                                </div>
                        </div>
                </>
        )
}
