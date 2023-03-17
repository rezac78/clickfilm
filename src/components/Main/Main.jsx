import Section from '../Left/Sections/section';
import NewSection from '../Left/NewSection/newsection';
import Serial from '../Left/Serial/serial';
import SerialPart from '../Right/Serial/Serial';
import Trailer from '../Left/Trailer/Trailer';
import Grouping from '../Left/Grouping/Grouping';
import SliderShow from '../Right/SliderShow/Slider';
import Search from '../Right/Search/Search';
import Film from '../Right/Film/Film';
import { FilmValues } from "../../events/events"
export default function Main() {
        return (
                <>
                        <section>
                                <div className="class">
                                        <main className="fullpart">
                                                <div className="row">
                                                        <div className="col-lg-4 col-md-12">
                                                                <div className="container">
                                                                        <div className="partone">
                                                                                <section>
                                                                                        <Section />
                                                                                        <NewSection />
                                                                                        <Serial />
                                                                                        <Trailer />
                                                                                        <Grouping />
                                                                                </section>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <div className="col-lg-8 col-md-12 ">
                                                                <section className="">
                                                                        <SliderShow />
                                                                        <Search />
                                                                        {
                                                                                FilmValues.map((e) => {
                                                                                        return <Film key={e.id} img={e.image} name={e.name} score={e.score} type={e.type} Quality={e.Quality} ProductCountry={e.ProductCountry} Director={e.Director} Actors={e.Actors} summary={e.summary} score2={e.score2} />
                                                                                })
                                                                        }
                                                                        {/* <SerialPart/> */}
                                                                </section>
                                                        </div>
                                                </div>
                                        </main>
                                </div>
                        </section>
                </>
        )
}
