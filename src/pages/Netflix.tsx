import Headers from "../components/Header/header"
import Card from "../components/Card/Card"
import { CardNetflix } from "../events/events"
import Meta from '@/components/MetaTitle/Meta'
export default function Netflex() {
  return (
    <>
      <Meta NameTitle="Netflix" linkTitle="Netflix" />
      <Headers />
      <div className="card-cantainer">
        {CardNetflix.map((e) => {
          return <Card key={e.id} poster={e.image} summary={e.summary} name={e.name} />
        })}
      </div>

    </>
  )
}