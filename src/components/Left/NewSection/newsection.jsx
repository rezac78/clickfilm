import Image from 'next/image'
import Link from 'next/link'
export default function NewSection() {
        return (
                <>
                        <div className="poster-film mt-3">
                                <a href="/film"><Image width={500} height={100} src="/img/home/left/film1/1.jpg" alt="" /></a>
                                <a href="/film"><Image width={500} height={100} src="/img/film/1.jpg" alt="" /></a>
                                <a href="/film"><Image width={500} height={100} src="/img/film/3.jpg" alt="" /></a>
                        </div>
                        <div className="text-center submit-one mt-3">
                                <a href="/film"><span style={{ "color": "#00D4AD;" }}>ورود به این بخش</span></a>
                        </div>
                </>
        )
}
