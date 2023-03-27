import Serials from "../Serial/Serials/serials";
import { SerialValues } from "../../../events/events";
export default function SerialsPart() {
        return (
                <>
                        <div className="PartCard">
                                <div className="CardSerial">
                                        {SerialValues.map((e) => {
                                                return <Serials key={e.id} Network={e.Network} type={e.type} poster={e.image} name={e.name} Quality={e.Quality} Score={e.score} summary={e.summary} partSerial={e.partSerial} />
                                        })}
                                </div>
                        </div>
                </>
        )
}
