import Image from 'next/image'
import Link from 'next/link'
import Meta from '@/components/MetaTitle/Meta'
export default function Trailer() {
        return (
                <>
                        <Meta NameTitle="Trailer" linkTitle="Home" />
                        <div className="banner pt-2">
                                <div className="content">
                                        <Image width={500} height={500} src="/public/img/1.jpg" alt="" />
                                        <h2>Harry potter – Season 8 – Official Trailer</h2>
                                        <p className="text-center">کتاب هفتم (کتاب فیلم‌های هری پاتر و یادگاران مرگ ۱ و هری پاتر و یادگاران مرگ۲ یکی است) هری پاتر کتابی است، که سرنوشت هری پاتر و دیگر شخصیت‌های داستان را مشخص می‌کند. مسئله اصلی داستان هری پاتر هفت پیدا کردن جان پیچ‌های باقی‌مانده و در نهایت نبرد نهایی با ولدمورت است. هری پاتر در این کتاب متوجه می‌شود که ۳ چیز به اسم یادگاران مرگ وجود دارد که صاحب آن‌ها ارباب مرگ می‌شود و تصمیم می‌گیرد به دنبال آن‌ها نیز برود. در این کتاب با گذشتهٔ دامبلدور نیز بیشتر آشنا می‌شویم.</p>
                                        <Link href="#" onclick="toggle();">تماشا</Link>
                                </div>
                        </div>
                        <div className="trailer">
                                <video src="/video/h.mp4" controls="true"></video>
                                <Image width={500} height={200} src="/img/close.png" className="close" onclick="toggle();" alt="" />
                        </div>

                </>
        )
}
