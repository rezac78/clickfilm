import { CardNetflix } from "../events/events"
import Headers from "../components/Header/header"
import Card from '@/components/Card/Card'
import Meta from "@/components/MetaTitle/Meta"
import Footer from "@/components/Footer/Footer"
export default function HBO() {
        return (
                <>
                        <Meta NameTitle="HBO" linkTitle="HBO" />
                        <Headers />
                        <div className="card-cantainer">
                                {CardNetflix.map((e) => {
                                        return <Card key={e.id} poster={e.image} summary={e.summary} name={e.name} />
                                })}
                        </div>
                        <Footer />
                </>
        )
}
