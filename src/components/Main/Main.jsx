import { useRouter } from 'next/router';
import Section from '../Left/Sections/section';
import NewSection from '../Left/NewSection/newsection';
import Serial from '../Left/Serial/serials';
import SerialPart from '../Right/Serial/Serials';
import TrailerPart from '../Left/Trailer/Trailer';
import Grouping from '../Left/Grouping/Grouping';
import SliderShow from '../Right/SliderShow/Slider';
import Search from '../Right/Search/Search';
import Film from '../Right/Film/Film';
import SubTitle from '../SubTitle/subTitle';
export default function Main({ FilmPart, PartSerial }) {
        const router = useRouter();
        return (
                <>
                        <section className='AllMain'>
                                <div className="classContainer">
                                        <main className="">
                                                <div className="row">
                                                        <div className="col-lg-4 col-md-12" >
                                                                <div className="container">
                                                                        <div>
                                                                                <Section />
                                                                                <NewSection />
                                                                                <Serial />
                                                                                <TrailerPart />
                                                                                <Grouping FilmPart={FilmPart} PartSerial={PartSerial} />
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <div className="PartLeft-Style col-lg-8 col-md-12">
                                                                <Search />
                                                                {
                                                                        router.route == "/" ? <SliderShow /> : null
                                                                }
                                                                {
                                                                        router.route == "/" ? <div className="mt-4">
                                                                                <SubTitle NameTitle="آخرین فیلم های سایت" />
                                                                        </div> : router.route == "/Film" ? <div className="mt-1">
                                                                                <SubTitle NameTitle="آخرین فیلم های سایت" />
                                                                        </div> : <div className="mt-1">
                                                                                <SubTitle NameTitle="آخرین سریال های سایت" />
                                                                        </div>
                                                                }
                                                                {
                                                                        router.route == "/Serial" ? <SerialPart PartSerial={PartSerial} />
                                                                                :
                                                                                FilmPart.map((e) => {
                                                                                        return <Film key={e.id} URL={e.slug} img={e.cover.url} imgPhone={e.coverPhone.url} name={e.tiTleFilm} type={e.tags} Director={e.director} Actors={e.actors} summary={e.description} Video={e.mp4.url} />
                                                                                })
                                                                }
                                                        </div>
                                                </div>
                                        </main>
                                </div>
                        </section>
                </>
        )
}
