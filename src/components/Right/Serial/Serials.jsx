import Serials from "../Serial/Serials/serials";
export default function SerialsPart({ PartSerial }) {

        return (
                <>
                        <div className="PartCard">
                                <div className="CardSerial">
                                        {PartSerial.map((e) => {
                                                return <Serials key={e.id} Quality={e.format} Network={e.network} type={e.tags} Number={e.number} poster={e.cover.url} name={e.title} Episode={e.episode} summary={e.description} Slug={e.slug} />
                                        })}
                                </div>
                        </div>
                </>
        )
}
