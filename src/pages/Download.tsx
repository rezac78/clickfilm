import Meta from '@/components/MetaTitle/Meta';
import Image from 'next/image';
export default function Download() {
        const myLoader = ({ src }) => {
                return img;
        }
        return (
                <>
                        <Meta NameTitle="Download" linkTitle="Home" />
                        <div style={{ "background": "#111111" }}>
                                <div className="">
                                        <div className="video">
                                                <div className="clipDown ">
                                                        <Image loader={myLoader} src={img} width={800} height={350} alt="poster-Film" />
                                                </div>
                                                <div className="sphere">
                                                        <video loop muted autoPlay >
                                                                <source type="video/webm" src="/video/4.mp4" />
                                                        </video>
                                                </div>
                                        </div>
                                        <div className="classContainer">
                                                <main >
                                                        <div className="container">
                                                                <div className="main">
                                                                        <div className="Main-Download">
                                                                                <div className="part1">
                                                                                        <div className="name-part">
                                                                                                <span>دانلود فیلم {name}</span>
                                                                                        </div>
                                                                                        <div className="collaction-part">
                                                                                                <span>ترسناک|درام|هیجان انگیز</span>
                                                                                        </div>
                                                                                </div>
                                                                                <div className="part2">
                                                                                        <div className="country-part ">
                                                                                                <i className="fas fa-globe"><span>محصول کشور : امریکا</span></i>
                                                                                                <i className="far fa-clock"><span>مدت زمان:92 دقیقه</span></i>
                                                                                        </div>
                                                                                        <div className="IMDB-part">
                                                                                                <i className="fas fa-star"><big>5.9</big><small>/10</small><span>IMDB</span></i>
                                                                                        </div>
                                                                                </div>
                                                                                <div className="part2">
                                                                                        <div className="pay-part ">
                                                                                                <i className="fas fa-trophy"><span>فروش کلی : ثبت نشده</span></i>
                                                                                        </div>
                                                                                        <div className="min-part">
                                                                                                <i className="far fa-clipboard"><span>میزان آراء: 2.112 نفر</span></i>
                                                                                        </div>
                                                                                </div>
                                                                                <div className="part3">
                                                                                        <div className="max-part text-right">
                                                                                                <span>کارگردان : <big>Castille Landon</big></span>
                                                                                                <span>بازیگران : <big>Israel Broussard, Katherine Heigl, Madison Iseman</big></span>
                                                                                        </div>
                                                                                </div>
                                                                                <div className="part3">
                                                                                        <div className="matn-part text-center">
                                                                                                <span>خلاصه داستان :</span>
                                                                                                <p>یک دختر جوان که در تمام طول زندگی‌اش با بیماری اسکیزوفرنی دست و پنجه نرم کرده است، به محض آنکه نسبت به همسایه خود برای سرقت یک کودک مشکوک می‌شود، می‌بایست با توهمات وحشتناک جدیدی مواجه شود و...</p>
                                                                                        </div>
                                                                                </div>

                                                                                <div className="part2">
                                                                                        <div className="number-part">
                                                                                                <span>نمره منتقدین <small>20</small> <big>از 100</big></span>
                                                                                        </div>
                                                                                        <div className="age-part ">
                                                                                                <span>رده سنی <big>PG-13</big></span>
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </main>
                                        </div>
                                </div>
                        </div>
                </>
        )
}
