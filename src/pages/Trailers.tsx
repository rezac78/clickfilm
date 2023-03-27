import Meta from '@/components/MetaTitle/Meta'
import Footer from '@/components/Footer/Footer'
import { TrailerValues } from "../events/events"
import Trailer from "../components/Trailer/Trailer"
export default function Trailers() {
        return (
                <>
                        <Meta NameTitle="Trailer" linkTitle="Home" />
                        <div className="FullPartBannerTrailer">
                                <div className="PartBannerTrailer">
                                        {TrailerValues.map((e) => {
                                                return <Trailer key={e.id} poster={e.image} summary={e.summary} name={e.name} videoPart={e.videoPart} />
                                        })}
                                </div>
                        </div>
                        <Footer />
                </>
        )
}