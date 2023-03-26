import { useRouter } from 'next/router';
import Section from '../Left/Sections/section';
import NewSection from '../Left/NewSection/newsection';
import Serial from '../Left/Serial/serials';
import SerialPart from '../Right/Serial/Serial';
import TrailerPart from '../Left/Trailer/Trailer';
import Grouping from '../Left/Grouping/Grouping';
import SliderShow from '../Right/SliderShow/Slider';
import Search from '../Right/Search/Search';
import Film from '../Right/Film/Film';
import { FilmValues } from "../../events/events"
import SubTitle from '../SubTitle/subTitle';
export default function Main() {
        const router = useRouter();
        return (
                <>
                        <section className='AllMain'>
                                <div className="class">
                                        <main className="">
                                                <div className="row">
                                                        <div className="col-lg-4 col-md-12" style={{ "background": "#20242C" }}>
                                                                <div className="container">
                                                                        <div>
                                                                                <Section />
                                                                                <NewSection />
                                                                                <Serial />
                                                                                <TrailerPart />
                                                                                <Grouping />
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <div className="col-lg-8 col-md-12" style={{ "background": "#20242C" }}>
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
                                                                        router.route == "/Serial" ? <SerialPart />
                                                                                :
                                                                                FilmValues.map((e) => {
                                                                                        return <Film key={e.id} img={e.image} name={e.name} score={e.score} type={e.type} Quality={e.Quality} ProductCountry={e.ProductCountry} Director={e.Director} Actors={e.Actors} summary={e.summary} score2={e.score2} />
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
