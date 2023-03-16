import Section from '../Left/Sections/section';
import NewSection from '../Left/NewSection/newsection';
import Serial from '../Left/Serial/serial';
import Trailer from '../Left/Trailer/Trailer';
import Grouping from '../Left/Grouping/Grouping';
import SliderShow from '../Right/SliderShow/Slider';
import Search from '../Right/Search/Search';
import Film from '../Right/Film/Film';
import Image from 'next/image'
import Link from 'next/link'
export default function Main() {
        return (
                <>
                        <section>
                                <div className="class">
                                        <main style={{ "backgroundColor": "#111111;" }} className="fullpart">
                                                <div className="row">
                                                        <div className="col-lg-4 col-md-12">
                                                                <div className="container">
                                                                        <div className="partone">
                                                                                <section>
                                                                                       <Section/>
                                                                                       <NewSection/>
                                                                                       <Serial/>
                                                                                       <Trailer/>
                                                                                       <Grouping/>              
                                                                                </section>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <div  className="col-lg-8 col-md-12 ">
                                                                <section className="">
                                                                        <SliderShow/>
                                                                        <Search/>
                                                                        <Film/>
                                                                </section>
                                                        </div>
                                                </div>
                                        </main>
                                </div>
                        </section>
                </>
        )
}
