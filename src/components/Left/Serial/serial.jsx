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
                                        <a href=""><div className="right2"><span>{Name}</span></div></a>
                                        <a href=""><div className="left2"><span>{PartSerial}</span></div></a>
                                </div>
                        </div>
                </>
        )
}
