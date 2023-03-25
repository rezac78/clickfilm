import Card from "../components/Card/Card"
import { CardNetflix } from "../events/events"
import Headers from "../components/Header/header"
import Meta from "@/components/MetaTitle/Meta"
export default function Marvel() {
        return (
                <>
                        <Meta NameTitle="Marvel" linkTitle="MARVEL" />
                        <Headers />
                        <div className="card-cantainer">
                                {CardNetflix.map((e) => {
                                        return <Card key={e.id} poster={e.image} summary={e.summary} name={e.name} />
                                })}
                        </div>
                </>
        )
}