import Image from 'next/image'
import Link from 'next/link'
export default function Card({ poster, summary, name }) {
        return (
                <>

                        <div className="card" style={{ "background": "black" }}>
                                <div className="card-content">
                                        <h2>{name}</h2>
                                        <p className="">{summary}</p>
                                        <Link href="/Download">دانلود فیلم</Link>
                                </div>
                                <Image width={500} height={100} src={poster} alt="" className="award-img" />
                        </div>

                </>
        )
}
