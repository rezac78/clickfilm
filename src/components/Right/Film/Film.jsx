import Image from 'next/image'
import Link from 'next/link'
export default function Film() {
        return (
                <>
                        <div className="textCollection text-center mt-4">
                                <span>اخرین فیلم های سایت</span>
                        </div>
                        <div style={{ "direction": "rtl;" }} className="menu-part mt-5">
                                <div className="row">
                                        <div className="col-lg-4 col-md-4" >
                                                <div className="d"><a href="/downlod"><Image width={250} height={300} src="/img/home/right/1.jpg" alt="" /></a></div>
                                        </div>
                                        <div className="col-lg-8 col-md-8 pop" >
                                                <div className="sesion1">
                                                        <div className="s1">
                                                                <a style={{ "text-decoration": "none;" }} href="/downlod"><span>دانلود فیلم Penguins:Life on the Edge 2020</span></a>
                                                        </div>
                                                        <div className="s2 ml-5">
                                                                <div className="star"><i class="fas fa-star"><span>6.9 <small>/10</small></span></i></div>
                                                                <div className="imdb"><span>IMDB</span></div>
                                                        </div>
                                                </div>
                                                <div className="sesion2 mt-4">
                                                        <div className="se1">
                                                                <span className="mton"><i className="far fa-folder"></i>ژانر :</span>
                                                                <span className="mton2">خوانوادگی <big>|</big> مستند </span>
                                                        </div>
                                                        <div className="se2 ml-5">
                                                                <span>میزان آرا : 112 نفر</span>
                                                        </div>
                                                </div>
                                                <div className="sesion2 mt-1">
                                                        <div className="ses1">
                                                                <span className="mton"><i className="fas fa-tv"></i>کیفیت :</span>
                                                                <span className="mton3">WEB-DL 1080p</span>
                                                        </div>
                                                </div>
                                                <div className="sesion2 mt-1">
                                                        <div className="ses1">
                                                                <span className="mton"><i className="fas fa-globe"></i>محصول کشور :</span>
                                                                <span className="mton2">آمریکا</span>
                                                        </div>
                                                </div>
                                                <div className="sesion2 mt-1">
                                                        <div className="ses1">
                                                                <span className="mton"><i className="fas fa-user"></i>کارگردان :</span>
                                                                <span className="mton2">Alastir Fothergil</span>
                                                        </div>
                                                </div>
                                                <div className="sesion2 mt-1">
                                                        <div className="ses1">
                                                                <span className="mton"><i className="fas fa-user-friends"></i>بازیگران :</span>
                                                                <span className="mton4">Alair Underwood, John Aitchison, Matthson Aeberhard</span>
                                                        </div>
                                                </div>
                                                <div className="sesion3 mt-1">
                                                        <div className="ses4">
                                                                <div className="ses4"><span className="mton"><i className="fas fa-stream"></i>خلاصه داستان :</span></div>
                                                                <div className="ses3"><p className="text-center">در جریان جنگ جهانی دوم، یک پسر هشت ساله به نام «برونو» به همراه خانواده‌اش شهر برلین را ترک می‌کنند تا در نزدیکی یک اردوگاه کار اجباری که پدرش اخیرا به عنوان فرمانده آن انتخاب شده است، زندگی کنند و...</p></div>
                                                        </div>
                                                </div>
                                        </div>

                                        <div className="col-lg-4 col-md-4" >
                                                <div className="d"><a href="/downlod"><Image width={250} height={300} src="/img/home/right/2.jpg" alt="" /></a></div>
                                        </div>
                                        <div className="col-lg-8 col-md-8 pop" >
                                                <div className="sesion1">
                                                        <div className="s1">
                                                                <a style={{ "text-decoration": "none;" }} href="/downlod"><span>دانلود فیلم Penguins:Life on the Edge 2020</span></a>
                                                        </div>
                                                        <div className="s2 ml-5">
                                                                <div className="star"><i className="fas fa-star"><span>6.9 <small>/10</small></span></i></div>
                                                                <div className="imdb"><span>IMDB</span></div>
                                                        </div>
                                                </div>
                                                <div className="sesion2 mt-4">
                                                        <div className="se1">
                                                                <span className="mton"><i className="far fa-folder"></i>ژانر :</span>
                                                                <span className="mton2">خوانوادگی <big>|</big> مستند </span>
                                                        </div>
                                                        <div className="se2 ml-5">
                                                                <span>میزان آرا : 112 نفر</span>
                                                        </div>
                                                </div>
                                                <div className="sesion2 mt-1">
                                                        <div className="ses1">
                                                                <span className="mton"><i className="fas fa-tv"></i>کیفیت :</span>
                                                                <span className="mton3">WEB-DL 1080p</span>
                                                        </div>
                                                </div>
                                                <div className="sesion2 mt-1">
                                                        <div className="ses1">
                                                                <span className="mton"><i className="fas fa-globe"></i>محصول کشور :</span>
                                                                <span className="mton2">آمریکا</span>
                                                        </div>
                                                </div>
                                                <div className="sesion2 mt-1">
                                                        <div className="ses1">
                                                                <span className="mton"><i className="fas fa-user"></i>کارگردان :</span>
                                                                <span className="mton2">Alastir Fothergil</span>
                                                        </div>
                                                </div>
                                                <div className="sesion2 mt-1">
                                                        <div className="ses1">
                                                                <span className="mton"><i className="fas fa-user-friends"></i>بازیگران :</span>
                                                                <span className="mton4">Alair Underwood, John Aitchison, Matthson Aeberhard</span>
                                                        </div>
                                                </div>
                                                <div className="sesion3 mt-1">
                                                        <div className="ses4">
                                                                <div className="ses4"><span className="mton"><i className="fas fa-stream"></i>خلاصه داستان :</span></div>
                                                                <div className="ses3"><p className="text-center">در جریان جنگ جهانی دوم، یک پسر هشت ساله به نام «برونو» به همراه خانواده‌اش شهر برلین را ترک می‌کنند تا در نزدیکی یک اردوگاه کار اجباری که پدرش اخیرا به عنوان فرمانده آن انتخاب شده است، زندگی کنند و...</p></div>
                                                        </div>
                                                </div>
                                        </div>

                                        <div className="col-lg-4 col-md-4" >
                                                <div className="d"><a href="/downlod"><Image width={250} height={300} src="/img/home/right/3.jpg" alt="" /></a></div>
                                        </div>
                                        <div className="col-lg-8 col-md-8 pop" >
                                                <div className="sesion1">
                                                        <div className="s1">
                                                                <a style={{ "text-decoration": "none;" }} href="/downlod"><span>دانلود فیلم Penguins:Life on the Edge 2020</span></a>
                                                        </div>
                                                        <div className="s2 ml-5">
                                                                <div className="star"><i className="fas fa-star"><span>6.9 <small>/10</small></span></i></div>
                                                                <div className="imdb"><span>IMDB</span></div>
                                                        </div>
                                                </div>
                                                <div className="sesion2 mt-4">
                                                        <div className="se1">
                                                                <span className="mton"><i className="far fa-folder"></i>ژانر :</span>
                                                                <span className="mton2">خوانوادگی <big>|</big> مستند </span>
                                                        </div>
                                                        <div className="se2 ml-5">
                                                                <span>میزان آرا : 112 نفر</span>
                                                        </div>
                                                </div>
                                                <div className="sesion2 mt-1">
                                                        <div className="ses1">
                                                                <span className="mton"><i className="fas fa-tv"></i>کیفیت :</span>
                                                                <span className="mton3">WEB-DL 1080p</span>
                                                        </div>
                                                </div>
                                                <div className="sesion2 mt-1">
                                                        <div className="ses1">
                                                                <span className="mton"><i className="fas fa-globe"></i>محصول کشور :</span>
                                                                <span className="mton2">آمریکا</span>
                                                        </div>
                                                </div>
                                                <div className="sesion2 mt-1">
                                                        <div className="ses1">
                                                                <span className="mton"><i className="fas fa-user"></i>کارگردان :</span>
                                                                <span className="mton2">Alastir Fothergil</span>
                                                        </div>
                                                </div>
                                                <div className="sesion2 mt-1">
                                                        <div className="ses1">
                                                                <span className="mton"><i className="fas fa-user-friends"></i>بازیگران :</span>
                                                                <span className="mton4">Alair Underwood, John Aitchison, Matthson Aeberhard</span>
                                                        </div>
                                                </div>
                                                <div className="sesion3 mt-1">
                                                        <div className="ses4">
                                                                <div className="ses4"><span className="mton"><i className="fas fa-stream"></i>خلاصه داستان :</span></div>
                                                                <div className="ses3"><p className="text-center">در جریان جنگ جهانی دوم، یک پسر هشت ساله به نام «برونو» به همراه خانواده‌اش شهر برلین را ترک می‌کنند تا در نزدیکی یک اردوگاه کار اجباری که پدرش اخیرا به عنوان فرمانده آن انتخاب شده است، زندگی کنند و...</p></div>
                                                        </div>
                                                </div>
                                        </div>

                                        <div className="col-lg-4 col-md-4" >
                                                <div className="d"><a href="/downlod"><Image width={250} height={300} src="/img/home/right/4.jpg" alt="" /></a></div>
                                        </div>
                                        <div className="col-lg-8 col-md-8 pop" >
                                                <div className="sesion1">
                                                        <div className="s1">
                                                                <a style={{ "text-decoration": "none;" }} href="/downlod"><span>دانلود فیلم Penguins:Life on the Edge 2020</span></a>
                                                        </div>
                                                        <div className="s2 ml-5">
                                                                <div className="star"><i className="fas fa-star"><span>6.9 <small>/10</small></span></i></div>
                                                                <div className="imdb"><span>IMDB</span></div>
                                                        </div>
                                                </div>
                                                <div className="sesion2 mt-4">
                                                        <div className="se1">
                                                                <span className="mton"><i className="far fa-folder"></i>ژانر :</span>
                                                                <span className="mton2">خوانوادگی <big>|</big> مستند </span>
                                                        </div>
                                                        <div className="se2 ml-5">
                                                                <span>میزان آرا : 112 نفر</span>
                                                        </div>
                                                </div>
                                                <div className="sesion2 mt-1">
                                                        <div className="ses1">
                                                                <span className="mton"><i className="fas fa-tv"></i>کیفیت :</span>
                                                                <span className="mton3">WEB-DL 1080p</span>
                                                        </div>
                                                </div>
                                                <div className="sesion2 mt-1">
                                                        <div className="ses1">
                                                                <span className="mton"><i className="fas fa-globe"></i>محصول کشور :</span>
                                                                <span className="mton2">آمریکا</span>
                                                        </div>
                                                </div>
                                                <div className="sesion2 mt-1">
                                                        <div className="ses1">
                                                                <span className="mton"><i className="fas fa-user"></i>کارگردان :</span>
                                                                <span className="mton2">Alastir Fothergil</span>
                                                        </div>
                                                </div>
                                                <div className="sesion2 mt-1">
                                                        <div className="ses1">
                                                                <span className="mton"><i className="fas fa-user-friends"></i>بازیگران :</span>
                                                                <span className="mton4">Alair Underwood, John Aitchison, Matthson Aeberhard</span>
                                                        </div>
                                                </div>
                                                <div className="sesion3 mt-1">
                                                        <div className="ses4">
                                                                <div className="ses4"><span className="mton"><i className="fas fa-stream"></i>خلاصه داستان :</span></div>
                                                                <div className="ses3"><p className="text-center">در جریان جنگ جهانی دوم، یک پسر هشت ساله به نام «برونو» به همراه خانواده‌اش شهر برلین را ترک می‌کنند تا در نزدیکی یک اردوگاه کار اجباری که پدرش اخیرا به عنوان فرمانده آن انتخاب شده است، زندگی کنند و...</p></div>
                                                        </div>
                                                </div>
                                        </div>

                                        <div className="col-lg-4 col-md-4" >
                                                <div className="d"><a href="/downlod"><Image width={250} height={300} src="/img/home/right/6.jpg" alt="" /></a></div>
                                        </div>
                                        <div className="col-lg-8 col-md-8 pop" >
                                                <div className="sesion1">
                                                        <div className="s1">
                                                                <a style={{ "text-decoration": "none;" }} href="/downlod"><span>دانلود فیلم Penguins:Life on the Edge 2020</span></a>
                                                        </div>
                                                        <div className="s2 ml-5">
                                                                <div className="star"><i className="fas fa-star"><span>6.9 <small>/10</small></span></i></div>
                                                                <div className="imdb"><span>IMDB</span></div>
                                                        </div>
                                                </div>
                                                <div className="sesion2 mt-4">
                                                        <div className="se1">
                                                                <span className="mton"><i className="far fa-folder"></i>ژانر :</span>
                                                                <span className="mton2">خوانوادگی <big>|</big> مستند </span>
                                                        </div>
                                                        <div className="se2 ml-5">
                                                                <span>میزان آرا : 112 نفر</span>
                                                        </div>
                                                </div>
                                                <div className="sesion2 mt-1">
                                                        <div className="ses1">
                                                                <span className="mton"><i className="fas fa-tv"></i>کیفیت :</span>
                                                                <span className="mton3">WEB-DL 1080p</span>
                                                        </div>
                                                </div>
                                                <div className="sesion2 mt-1">
                                                        <div className="ses1">
                                                                <span className="mton"><i className="fas fa-globe"></i>محصول کشور :</span>
                                                                <span className="mton2">آمریکا</span>
                                                        </div>
                                                </div>
                                                <div className="sesion2 mt-1">
                                                        <div className="ses1">
                                                                <span className="mton"><i className="fas fa-user"></i>کارگردان :</span>
                                                                <span className="mton2">Alastir Fothergil</span>
                                                        </div>
                                                </div>
                                                <div className="sesion2 mt-1">
                                                        <div className="ses1">
                                                                <span className="mton"><i className="fas fa-user-friends"></i>بازیگران :</span>
                                                                <span className="mton4">Alair Underwood, John Aitchison, Matthson Aeberhard</span>
                                                        </div>
                                                </div>
                                                <div className="sesion3 mt-1">
                                                        <div className="ses4">
                                                                <div className="ses4"><span className="mton"><i className="fas fa-stream"></i>خلاصه داستان :</span></div>
                                                                <div className="ses3"><p className="text-center">در جریان جنگ جهانی دوم، یک پسر هشت ساله به نام «برونو» به همراه خانواده‌اش شهر برلین را ترک می‌کنند تا در نزدیکی یک اردوگاه کار اجباری که پدرش اخیرا به عنوان فرمانده آن انتخاب شده است، زندگی کنند و...</p></div>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4" >
                                                <div className="d"><a href="/downlod"><Image width={250} height={300} src="/img/home/right/5.jpg" alt="" /></a></div>
                                        </div>
                                        <div className="col-lg-8 col-md-8 pop" >
                                                <div className="sesion1">
                                                        <div className="s1">
                                                                <a style={{ "text-decoration": "none;" }} href="/downlod"><span>دانلود فیلم Penguins:Life on the Edge 2020</span></a>
                                                        </div>
                                                        <div className="s2 ml-5">
                                                                <div className="star"><i className="fas fa-star"><span>6.9 <small>/10</small></span></i></div>
                                                                <div className="imdb"><span>IMDB</span></div>
                                                        </div>
                                                </div>
                                                <div className="sesion2 mt-4">
                                                        <div className="se1">
                                                                <span className="mton"><i className="far fa-folder"></i>ژانر :</span>
                                                                <span className="mton2">خوانوادگی <big>|</big> مستند </span>
                                                        </div>
                                                        <div className="se2 ml-5">
                                                                <span>میزان آرا : 112 نفر</span>
                                                        </div>
                                                </div>
                                                <div className="sesion2 mt-1">
                                                        <div className="ses1">
                                                                <span className="mton"><i className="fas fa-tv"></i>کیفیت :</span>
                                                                <span className="mton3">WEB-DL 1080p</span>
                                                        </div>
                                                </div>
                                                <div className="sesion2 mt-1">
                                                        <div className="ses1">
                                                                <span className="mton"><i className="fas fa-globe"></i>محصول کشور :</span>
                                                                <span className="mton2">آمریکا</span>
                                                        </div>
                                                </div>
                                                <div className="sesion2 mt-1">
                                                        <div className="ses1">
                                                                <span className="mton"><i className="fas fa-user"></i>کارگردان :</span>
                                                                <span className="mton2">Alastir Fothergil</span>
                                                        </div>
                                                </div>
                                                <div className="sesion2 mt-1">
                                                        <div className="ses1">
                                                                <span className="mton"><i className="fas fa-user-friends"></i>بازیگران :</span>
                                                                <span className="mton4">Alair Underwood, John Aitchison, Matthson Aeberhard</span>
                                                        </div>
                                                </div>
                                                <div className="sesion3 mt-1">
                                                        <div className="ses4">
                                                                <div className="ses4"><span className="mton"><i className="fas fa-stream"></i>خلاصه داستان :</span></div>
                                                                <div className="ses3"><p className="text-center">در جریان جنگ جهانی دوم، یک پسر هشت ساله به نام «برونو» به همراه خانواده‌اش شهر برلین را ترک می‌کنند تا در نزدیکی یک اردوگاه کار اجباری که پدرش اخیرا به عنوان فرمانده آن انتخاب شده است، زندگی کنند و...</p></div>
                                                        </div>
                                                </div>
                                        </div>
                                         <div className="col-lg-4 col-md-4" >
                                                <div className="d"><a href="/downlod"><Image width={250} height={300} src="/img/home/right/5.jpg" alt="" /></a></div>
                                        </div>
                                        <div className="col-lg-8 col-md-8 pop" >
                                                <div className="sesion1">
                                                        <div className="s1">
                                                                <a style={{ "text-decoration": "none;" }} href="/downlod"><span>دانلود فیلم Penguins:Life on the Edge 2020</span></a>
                                                        </div>
                                                        <div className="s2 ml-5">
                                                                <div className="star"><i className="fas fa-star"><span>6.9 <small>/10</small></span></i></div>
                                                                <div className="imdb"><span>IMDB</span></div>
                                                        </div>
                                                </div>
                                                <div className="sesion2 mt-4">
                                                        <div className="se1">
                                                                <span className="mton"><i className="far fa-folder"></i>ژانر :</span>
                                                                <span className="mton2">خوانوادگی <big>|</big> مستند </span>
                                                        </div>
                                                        <div className="se2 ml-5">
                                                                <span>میزان آرا : 112 نفر</span>
                                                        </div>
                                                </div>
                                                <div className="sesion2 mt-1">
                                                        <div className="ses1">
                                                                <span className="mton"><i className="fas fa-tv"></i>کیفیت :</span>
                                                                <span className="mton3">WEB-DL 1080p</span>
                                                        </div>
                                                </div>
                                                <div className="sesion2 mt-1">
                                                        <div className="ses1">
                                                                <span className="mton"><i className="fas fa-globe"></i>محصول کشور :</span>
                                                                <span className="mton2">آمریکا</span>
                                                        </div>
                                                </div>
                                                <div className="sesion2 mt-1">
                                                        <div className="ses1">
                                                                <span className="mton"><i className="fas fa-user"></i>کارگردان :</span>
                                                                <span className="mton2">Alastir Fothergil</span>
                                                        </div>
                                                </div>
                                                <div className="sesion2 mt-1">
                                                        <div className="ses1">
                                                                <span className="mton"><i className="fas fa-user-friends"></i>بازیگران :</span>
                                                                <span className="mton4">Alair Underwood, John Aitchison, Matthson Aeberhard</span>
                                                        </div>
                                                </div>
                                                <div className="sesion3 mt-1">
                                                        <div className="ses4">
                                                                <div className="ses4"><span className="mton"><i className="fas fa-stream"></i>خلاصه داستان :</span></div>
                                                                <div className="ses3"><p className="text-center">در جریان جنگ جهانی دوم، یک پسر هشت ساله به نام «برونو» به همراه خانواده‌اش شهر برلین را ترک می‌کنند تا در نزدیکی یک اردوگاه کار اجباری که پدرش اخیرا به عنوان فرمانده آن انتخاب شده است، زندگی کنند و...</p></div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </>
        )
}
